import socket
import struct

MULTICAST_GROUP_ADDRESS = '224.1.1.1'
MULTICAST_PORT = 5000

def create_gateway_discovery_socket():
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind((MULTICAST_GROUP_ADDRESS, MULTICAST_PORT))
    mreq = struct.pack("4sl", socket.inet_aton(MULTICAST_GROUP_ADDRESS), socket.INADDR_ANY)

    sock.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP, mreq)
    return sock

