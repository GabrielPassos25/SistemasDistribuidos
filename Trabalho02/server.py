from socket import socket, AF_INET, SOCK_STREAM
import json
from threading import Thread

from messages import BUFFER_SIZE, decode_message, ClientMessageTypes, encode_message, ServerMessageTypes

ADDRESS = ('0.0.0.0', 2345)
MAX_EXCEPT_RETRIES = 5


class ChatServer():
    def __init__(self):
        self.__socket = socket(AF_INET, SOCK_STREAM)
        self.__socket.bind(ADDRESS)
        self.__socket.listen(10)
        self.__clients = []
        print("Servidor iniciado.")

        while True:
            client_socket, client_address = self.__socket.accept()
            Thread(target=self.__handle_client, args=[client_socket]).start()

    def __handle_client(self, client_socket: socket):
        print("Running client handler...")
        op_type, body = decode_message(client_socket.recv(BUFFER_SIZE))
        username = body["username"]
        self.__clients.append((username, client_socket))
        self.__notify_new_user(username)
        retries = 0
        while True:
            try:
                op_type, body = decode_message(client_socket.recv(BUFFER_SIZE))
                if op_type == ClientMessageTypes.SEND_MESSAGE: self.__notify_message(username, body["message"])
                if op_type == ClientMessageTypes.LIST_USERS: self.__send_users_list(client_socket)
                if op_type == ClientMessageTypes.EXIT:
                    exiting_index = self.__handle_user_exit(username)
                    self.__clients.pop(exiting_index)
                    client_socket.close()
                    break
            except Exception as e:
                print(e)
                if retries == MAX_EXCEPT_RETRIES:
                    exiting_index = self.__handle_user_exit(username)
                    self.__clients.pop(exiting_index)
                    client_socket.close()
                    break

                retries += 1


    def __notify_message(self, sender_username, message):
        for _, client_socket in self.__clients:
            client_socket.send(encode_message(ServerMessageTypes.NEW_MESSAGE,
                                              { "sender_username":  sender_username, "message": message}))

    def __send_users_list(self, client_socket):
        usernames = [client_tuple[0] for client_tuple in self.__clients]
        client_socket.send(encode_message(ServerMessageTypes.USERS_LIST,
                                          { "users": usernames }))

    def __notify_new_user(self, username):
        for _, client_socket in self.__clients:
            client_socket.send(encode_message(ServerMessageTypes.USER_JOINED, { "username": username }))

    def __handle_user_exit(self, exit_username):
        exiting_username_idx = 0
        i = 0
        for username, client_socket in self.__clients:
            if exit_username == username:
                exiting_username_idx = i
            client_socket.send(encode_message(ServerMessageTypes.USER_EXITED, { "username": exit_username}))
            i += 1
        return exiting_username_idx

ChatServer()