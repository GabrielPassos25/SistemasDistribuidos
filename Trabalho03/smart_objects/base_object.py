from client_discovery import get_objects_group_socket, BUFFER_SIZE, send_to_gateway_group, get_udp_socket
from socket import socket, AF_INET, SOCK_STREAM
from threading import Thread
import requests
import uuid
import time

from SmartObjectDetails_pb2 import SmartObjectDetails
from FindGatewayRequest_pb2 import FindGatewayRequest
from FindGatewayResponse_pb2 import FindGatewayResponse

REFRESH_INTERVAL = 10


class BaseObject:
    def __init__(self):
        print("Objeto iniciado...")
        self.group_socket = get_objects_group_socket()
        self.udp_socket = get_udp_socket()
        self.command_socket = socket(AF_INET, SOCK_STREAM)

        # SO will assign a random free port to the socket
        self.command_socket.bind(('', 0))
        self.ip, self.port = self.command_socket.getsockname()
        self.id = str(uuid.uuid4())
        self.status = True

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

        Thread(target=self.upload_gateway_loop, name="Upload gateway loop").start()

        # Start listening for commands
        self.command_socket.listen(100)
        while True:
            client_socket, _ = self.command_socket.accept()
            Thread(target=self.handle_gateway_command, args=[client_socket]).start()

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

    def upload_gateway_loop(self):
        while True:
            # envia mensagem para gateway garantindo que estado esteja atualizado com o do objeto local
            r = requests.put(f"{self.gateway_api_url}/objects/refresh/{self.id}",
                             data=self.to_proto().SerializeToString())
            print(r)
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
