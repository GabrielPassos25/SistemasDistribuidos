import socket
import struct
import platform
MULTICAST_GROUP_ADDRESS = '224.1.1.1'
MULTICAST_GROUP_ADDRESS_WINDOWS = '127.0.0.1'
MULTICAST_PORT = 5000

def create_gateway_discovery_socket():
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

    if platform.system() == 'Windows':
        sock.bind((MULTICAST_GROUP_ADDRESS_WINDOWS, MULTICAST_PORT))
    else:
        sock.bind((MULTICAST_GROUP_ADDRESS, MULTICAST_PORT))
        
        mreq = struct.pack("4sl", socket.inet_aton(MULTICAST_GROUP_ADDRESS), socket.INADDR_ANY)

        sock.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP, mreq)
    return sock

