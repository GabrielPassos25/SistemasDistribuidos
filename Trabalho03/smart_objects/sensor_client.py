from client_discovery import create_gateway_discovery_socket
from socket import socket, AF_INET, SOCK_STREAM
from threading import Thread

BUFFER_SIZE = 65536

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
        print(f"Endereço do sensor: ({self.__ip}:{self.__port})")

        Thread(target=self.gateway_discovery_loop, name="Gateway discovery loop").start()

    def gateway_discovery_loop(self):
        print("Loop de descoberta ativo")
        while True:
            print(self.__multicast_socket.recv(1024).decode('utf-8'))


SensorClient()