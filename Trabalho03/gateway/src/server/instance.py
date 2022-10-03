from flask import Flask
from flask_cors import CORS, cross_origin
import socket

MULTICAST_GROUP_ADDRESS = '224.0.0.1'
MULTICAST_PORT = 5000
MULTICAST_ADDRESS = (MULTICAST_GROUP_ADDRESS, MULTICAST_PORT)

class Server():
    def __init__(self, ):
        self.app = Flask(__name__)
        self.__multicast_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.__multicast_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        CORS(self.app)

    def run(self, ):
        self.__multicast_socket.sendto(bytes("Gateway searching for objects", 'utf-8'), MULTICAST_ADDRESS)

        self.app.run(
            debug=True
        )

server = Server()