from client_discovery import get_objects_group_socket, BUFFER_SIZE, send_to_gateway_group, get_udp_socket
from socket import socket, AF_INET, SOCK_STREAM
from threading import Thread
import requests
import uuid
import time
from concurrent import futures

import grpc

from SmartObjectDetails_pb2 import SmartObjectDetails
from FindGatewayRequest_pb2 import FindGatewayRequest
from FindGatewayResponse_pb2 import FindGatewayResponse
import SmartObjectDetails_pb2_grpc
from object_grpc_server import ObjectGRPCServer
import pika

REFRESH_INTERVAL = 1

# sensor de temperatura e ar condicionado

# sensor de luminosidade e lampadas inteligentes

# sensor de fumaça e sprinkler

class ObjectTypes:
    TEMPERATURE_SENSOR = "temp_sensor"
    AIR_CONDITIONER = "ac"
    LUMINOSITY_SENSOR = "luminosity_sensor"
    LIGHT = "light"
    SMOKE_SENSOR = "smoke_sensor"
    SPRINKLER = "sprinkler"
    ANY = "*"


class BaseObject:
    def __init__(self, status=True):
        print("Objeto iniciado...")
        self.group_socket = get_objects_group_socket()
        self.udp_socket = get_udp_socket()
        self.command_socket = socket(AF_INET, SOCK_STREAM)

        # SO will assign a random free port to the socket
        self.command_socket.bind(('', 0))
        self.ip, self.port = self.command_socket.getsockname()
        self.command_socket.close()
        self.id = str(uuid.uuid4())
        self.status = status

        print(f"Endereço do objeto: ({self.ip}:{self.port})")
        print("Solicitando localização do gateway...")
        request = FindGatewayRequest()
        send_to_gateway_group(self.udp_socket, request.SerializeToString())

        print("Aguardando localização do gateway")
        response = FindGatewayResponse()
        response.ParseFromString(self.group_socket.recv(BUFFER_SIZE))

        self.gateway_ip = response.ip
        self.gateway_port = response.port
        self.gateway_api_url = f"http://{self.gateway_ip}:{self.gateway_port}"

        self.register_object_in_gateway()

        self.rabbit_mq_connection = pika.BlockingConnection(
            pika.ConnectionParameters(host='localhost'))
        self.rabbit_mq_channel = self.rabbit_mq_connection.channel()
        self.rabbit_mq_channel.exchange_declare(exchange="object_updates", exchange_type="topic")

        Thread(target=self.update_gateway_loop, name="Update gateway loop").start()

        self.grpc_server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
        SmartObjectDetails_pb2_grpc.add_SmartObjectUpdateServicer_to_server(ObjectGRPCServer(self), self.grpc_server)
        self.grpc_server.add_insecure_port(f'0.0.0.0:{self.port}')
        self.grpc_server.start()
        # self.grpc_server.wait_for_termination()

    '''Allows an object watch for events in another object, this allow some kind of interaction between events
    happening on other objects;'''
    def watch_smart_object_events(self, connection, callback, object_type=ObjectTypes.ANY):
        channel = connection.channel()
        result = channel.queue_declare(queue='', exclusive=True)
        queue_name = result.method.queue
        channel.queue_bind(exchange='object_updates', queue=queue_name, routing_key=object_type)
        channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=False)
        channel.start_consuming()

    def to_proto(self):
        return SmartObjectDetails()

    def update_internal_state(self, object_details):
        pass

    def handle_gateway_command(self, client_socket):
        print("Atualizando estado interno devido a comando externo")
        object_details = SmartObjectDetails()
        object_details.ParseFromString(client_socket.recv(BUFFER_SIZE))
        client_socket.close()

        self.update_internal_state(object_details)

    def update_gateway_loop(self):
        while True:
            # envia mensagem para gateway garantindo que estado esteja atualizado com o do objeto local
            print("Atualizando gateway...")
            self.rabbit_mq_channel.basic_publish(exchange="object_updates", routing_key=self.object_type, body=self.to_proto().SerializeToString())
            time.sleep(REFRESH_INTERVAL)

    def register_object_in_gateway(self):
        print(self.to_proto())
        r = requests.post(f"{self.gateway_api_url}/objects", data=self.to_proto().SerializeToString())
        print(r)


    # def gateway_discovery_loop(self):
    #     print("Loop de descoberta ativo")
    #     while True:
    #         try:
    #             request = GatewayLookupRequest()
    #             request.ParseFromString(self.group_socket.recv(BUFFER_SIZE))
    #             sensor = TemperatureSensorDetails(temperature = self.temperature)
    #             response = SmartObjectDetails(status=True, ip=self.ip, port=self.port, temp_sensor=sensor,
    #                                           id=self.id)
    #             r = requests.post(f"{gateway_api_url}/objects", data=response.SerializeToString())
    #             print(r)
    #         except Exception as e:
    #             print(e)
    #             print("Erro inesperado ao receber requisições de descoberta do gateway")
