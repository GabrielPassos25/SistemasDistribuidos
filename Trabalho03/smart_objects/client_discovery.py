import socket
import struct
import platform
OBJECTS_GROUP_ADDRESS = '224.1.1.1'
OBJECTS_GROUP_ADDRESS_WINDOWS = '127.0.0.1'

GATEWAY_GROUP_ADDRESS = '224.1.1.2'
GATEWAY_GROUP_ADDRESS_WINDOWS = '127.0.0.2'
MULTICAST_PORT = 5000

BUFFER_SIZE = 65536

def get_group_multicast_socket(group_address, windows_group_address):
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

    if platform.system() == 'Windows':
        sock.bind((windows_group_address, MULTICAST_PORT))
    else:
        sock.bind((group_address, MULTICAST_PORT))

        mreq = struct.pack("4sl", socket.inet_aton(group_address), socket.INADDR_ANY)

        sock.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP, mreq)
    return sock

def get_objects_group_socket():
    return get_group_multicast_socket(OBJECTS_GROUP_ADDRESS, OBJECTS_GROUP_ADDRESS_WINDOWS)


def get_gateway_group_socket():
    return get_group_multicast_socket(GATEWAY_GROUP_ADDRESS, GATEWAY_GROUP_ADDRESS_WINDOWS)

def get_udp_socket():
    udp_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    udp_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    return udp_socket


def send_to_gateway_group(socket, message):
    socket.sendto(message, (GATEWAY_GROUP_ADDRESS, MULTICAST_PORT))


def send_to_objects_group(socket, message):
    socket.sendto(message, (OBJECTS_GROUP_ADDRESS, MULTICAST_PORT))
