from client_discovery import get_objects_group_socket, BUFFER_SIZE, send_to_gateway_group, get_udp_socket
from socket import socket, AF_INET, SOCK_STREAM
from threading import Thread
import requests
import uuid
import time

from SmartObjectDetails_pb2 import SmartObjectDetails, TemperatureSensorDetails
from FindGatewayRequest_pb2 import FindGatewayRequest
from FindGatewayResponse_pb2 import FindGatewayResponse

REFRESH_INTERVAL = 10

class SensorClient():
    def __init__(self):
        print("Objeto iniciado...")
        self.__group_socket = get_objects_group_socket()
        self.__udp_socket = get_udp_socket()
        self.__command_socket = socket(AF_INET, SOCK_STREAM)

        # SO will assign a random free port to the socket
        self.__command_socket.bind(('', 0))

        print(f"Endereço do objeto: ({self.__ip}:{self.__port})")
        print("Solicitando localização do gateway...")
        request = FindGatewayRequest()
        send_to_gateway_group(self.__udp_socket, request.SerializeToString())

        print("Aguardando localização do gateway")
        response = FindGatewayResponse()
        response.ParseFromString(self.__group_socket.recv(BUFFER_SIZE))

        self.__gateway_ip = response.ip
        self.__gateway_port = response.port
        self.__gateway_api_url = f"http://{self.__gateway_ip}:{self.__gateway_port}"

        self.__register_object_in_gateway()

        Thread(target=self.__upload_gateway_loop, name="Upload gateway loop").start()

        # Start listening for commands
        self.__command_socket.listen(100)
        while True:
            client_socket, _ = self.__command_socket.accept()
            Thread(target=self.__handle_gateway_command, args=[client_socket]).start()

    def __to_proto(self):
        pass

    def __update_internal_state(self, object_details):
        pass

    def __handle_gateway_command(self, client_socket):
        print("Atualizando estado interno devido a comando externo")
        object_details = SmartObjectDetails()
        object_details.ParseFromString(client_socket.recv(BUFFER_SIZE))
        client_socket.close()

        self.__update_internal_state(object_details)

    def __upload_gateway_loop(self):
        while True:
            # envia mensagem para gateway garantindo que estado esteja atualizado com o do objeto local
            sensor = TemperatureSensorDetails(temperature = self.__temperature)
            response = SmartObjectDetails(status=True, ip=self.__ip, port=self.__port, temp_sensor=sensor,
                                          id=self.__id)
            r = requests.put(f"{self.__gateway_api_url}/objects/refresh/{self.__id}", data=response.SerializeToString())
            print(r)
            time.sleep(REFRESH_INTERVAL)

    def __register_object_in_gateway(self):
        sensor = TemperatureSensorDetails(temperature = self.__temperature)
        response = SmartObjectDetails(status=True, ip=self.__ip, port=self.__port, temp_sensor=sensor,
                                      id=self.__id)
        r = requests.post(f"{self.__gateway_api_url}/objects", data=self.__to_proto().SerializeToString())
        print(r)


    # def gateway_discovery_loop(self):
    #     print("Loop de descoberta ativo")
    #     while True:
    #         try:
    #             request = GatewayLookupRequest()
    #             request.ParseFromString(self.__group_socket.recv(BUFFER_SIZE))
    #             sensor = TemperatureSensorDetails(temperature = self.__temperature)
    #             response = SmartObjectDetails(status=True, ip=self.__ip, port=self.__port, temp_sensor=sensor,
    #                                           id=self.__id)
    #             r = requests.post(f"{gateway_api_url}/objects", data=response.SerializeToString())
    #             print(r)
    #         except Exception as e:
    #             print(e)
    #             print("Erro inesperado ao receber requisições de descoberta do gateway")

SensorClient()