from client_discovery import create_gateway_discovery_socket
from socket import socket, AF_INET, SOCK_STREAM
from threading import Thread
import requests
import uuid

from GatewayLookup_pb2 import GatewayLookupRequest
from SmartObjectDetails_pb2 import SmartObjectDetails, TemperatureSensorDetails

BUFFER_SIZE = 65536
GATEWAY_HOST = "localhost"
GATEWAY_PORT = 5000
GATEWAY_API_URL = f"http://{GATEWAY_HOST}:{GATEWAY_PORT}"

class SensorClient():
    def __init__(self):
        self.__multicast_socket = create_gateway_discovery_socket()
        print("Sensor iniciado...")
        self.__command_socket = socket(AF_INET, SOCK_STREAM)

        # SO will assign a random free port to the socket
        self.__command_socket.bind(('', 0))
        self.__on = True
        self.__temperature = 30
        self.__ip, self.__port = self.__command_socket.getsockname()
        self.__id = str(uuid.uuid4())
        print(f"Endereço do sensor: ({self.__ip}:{self.__port})")

        Thread(target=self.gateway_discovery_loop, name="Gateway discovery loop").start()

    def gateway_discovery_loop(self):
        print("Loop de descoberta ativo")
        while True:
            try:
                request = GatewayLookupRequest()
                request.ParseFromString(self.__multicast_socket.recv(BUFFER_SIZE))
                sensor = TemperatureSensorDetails(temperature = self.__temperature)
                response = SmartObjectDetails(status=True, ip=self.__ip, port=self.__port, temp_sensor=sensor,
                                              id=self.__id)
                r = requests.post(f"{GATEWAY_API_URL}/objects", data=response.SerializeToString())
                print(r)
            except Exception as e:
                print(e)
                print("Erro inesperado ao receber requisições de descoberta do gateway")



SensorClient()