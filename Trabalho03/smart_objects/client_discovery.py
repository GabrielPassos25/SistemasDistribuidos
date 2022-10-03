import socket

MULTICAST_GROUP_ADDRESS = '224.0.0.1'
MULTICAST_PORT = 5000

def create_gateway_discovery_socket():
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind((MULTICAST_GROUP_ADDRESS, MULTICAST_PORT))
    return sock

