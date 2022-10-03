from socket import socket, AF_INET, SOCK_STREAM
from threading import Thread

from messages import encode_message, ClientMessageTypes, decode_message, ServerMessageTypes, BUFFER_SIZE


class ChatClient():
    def __init__(self):
        self.is_connected = False
        self.__socket = socket(AF_INET, SOCK_STREAM)
        print("Bem vindo ao DISTRIBU-CHAT 13000")
        print("Digite /ENTRAR <IP SERVIDOR> <PORTA SERVIDOR> para se conectar ao chat. \n")
        print("Exemplo de comando: /ENTRAR 127.0.0.1 2345 \n")

        # TODO handle failures here
        user_choice = input("").split()

        server_host, server_port = user_choice[1], user_choice[2]

        self.__socket.connect((server_host, int(server_port)))

        print("...\nConectado com sucesso! \n")
        print("Para continuar, digite o seu nome de usuário (username) \n")
        self.username = input("")
        self.__socket.send(encode_message(ClientMessageTypes.USERNAME, { "username": self.username }))

        self.__print_menu()

        # Start threads to read from user keyboard and to wait for messages from the server
        input_loop = Thread(target=self.__user_loop, name="User input loop").start()
        events_loop = Thread(target=self.__user_socket_loop, name="Server events loop").start()


    def __print_menu(self):
        print("Os comandos possíveis são: /USUARIOS para listar usuários ativos e /SAIR para sair.")
        print("Para enviar uma mensagem, basta digitar a mensagem desejada. ")

    def __send_chat_message(self, message):
        self.__socket.send(encode_message(ClientMessageTypes.SEND_MESSAGE, { "message": message }))

    def __send_exit_message(self):
        self.__socket.send(encode_message(ClientMessageTypes.EXIT, None))

    def __send_list_users_message(self):
        self.__socket.send(encode_message(ClientMessageTypes.LIST_USERS, None))

    def __handle_recv_message(self, body):
        if (body['sender_username'] == self.username): return
        print(f"{body['sender_username']}: {body['message']}")
    def __handle_user_join_message(self, body):
        if (body['username'] == self.username): return
        print(f"Usuário {body['username']} entrou no chat")
    def __handle_list_users_message(self, body):
        print(f"Lista de usuários disponíveis: {', '.join(body['users'])}")
    def __handle_user_exited_message(self, body):
        if (body['username'] == self.username): return True
        print(f"Usuário {body['username']} deixou o chat")
        return False


    # receive user input from keyboard and send to server
    def __user_loop(self):
        while True:
            choice = input(f"{self.username}: ")
            choice_parts = choice.split()
            command = choice_parts[0]
            is_exit = command == "/SAIR"
            is_list_users = command == "/USUARIOS"
            is_message = not is_exit and not is_list_users

            if is_exit:
                self.__send_exit_message()
                return
            if is_list_users: self.__send_list_users_message()
            if is_message:
                self.__send_chat_message(choice)

    # receive messages from server socket and update the chat for the user
    def __user_socket_loop(self):
        while True:
            server_message = self.__socket.recv(BUFFER_SIZE)
            msg_type, msg_body = decode_message(server_message)
            is_recv_msg = msg_type == ServerMessageTypes.NEW_MESSAGE
            is_user_join_msg = msg_type == ServerMessageTypes.USER_JOINED
            is_list_users_msg = msg_type == ServerMessageTypes.USERS_LIST
            is_user_exited_msg = msg_type == ServerMessageTypes.USER_EXITED

            if is_recv_msg: self.__handle_recv_message(msg_body)
            if is_user_join_msg: self.__handle_user_join_message(msg_body)
            if is_list_users_msg: self.__handle_list_users_message(msg_body)
            if is_user_exited_msg:
                should_break = self.__handle_user_exited_message(msg_body)
                if should_break:
                    self.__socket.close()
                    return

ChatClient()
