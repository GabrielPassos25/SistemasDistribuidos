from flask import Flask
from flask_cors import CORS, cross_origin
import socket
import platform
from threading import Thread

from src.server.FindGatewayRequest_pb2 import FindGatewayRequest
from src.server.FindGatewayResponse_pb2 import FindGatewayResponse

import sys
# caution: path[0] is reserved for script path (or '' in REPL)
sys.path.insert(1, '/home/vini/University/SistemasDistribuidos/Trabalho03/smart_objects')

from client_discovery import get_gateway_group_socket, get_udp_socket, BUFFER_SIZE, send_to_objects_group


class Server():
    def __init__(self, ):
        self.app = Flask(__name__)
        self.udp_socket = get_udp_socket()
        self.gateway_group_socket = get_gateway_group_socket()

        CORS(self.app)

    def send_location_to_objects_group(self):
        print("Enviando localização do gateway para objetos")
        request = FindGatewayResponse(ip="localhost", port=5000)
        send_to_objects_group(self.udp_socket, request.SerializeToString())

    def gateway_location_listener(self):
        print("Loop de localização de objetos ativo")
        while True:
            try:
                request = FindGatewayRequest()
                request.ParseFromString(self.gateway_group_socket.recv(BUFFER_SIZE))
                print("Requisição de localização recebida de objetos")
                self.send_location_to_objects_group()
            except Exception as e:
                print(e)
                print("Erro inesperado ao receber requisições de descoberta do gateway")

    def run(self):
        # Envia mensagens para objetos, pois podem existir objetos aguardando por localização do gateway
        self.send_location_to_objects_group()

        Thread(target=self.gateway_location_listener, name="Gateway discovery loop").start()

        self.app.run(
            debug=False
        )

server = Server()