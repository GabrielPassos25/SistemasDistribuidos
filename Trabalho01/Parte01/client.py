import socket

HOST = "127.0.0.1" # The server's hostname or IP address
PORT = 5000 # The port used by the server

socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

print("Cliente iniciado na porta " + str(PORT))

# Data format: "first_operator operation second_operator"

while True:
    print("--- Calculadora Básica ---")

    # Get inputs from user
    first_operator = input("Digite o primeiro número: ")

    second_opearator = input("Digite o segundo número: ")

    operation = input("Digite a operação: ")

    # Send message to server
    message = first_operator + " " + operation + " " + second_opearator
    print("Enviando: " + message)

    socket.sendto(message.encode('utf-8'), (HOST, PORT))

     # Get result from server
    data, addr = socket.recvfrom(5000)
    result = data.decode('utf-8')
    print("Endereço e mensagem recebida do servidor: {} --> {}".format(addr, result))

    next_opeation = input("Deseja realizar outra operação? (s/n): ")

   


    # Check if user wants to continue
    if(next_opeation == "n"):
        socket.sendto("exit".encode('utf-8'), (HOST, PORT))
        break


print("Encerrando cliente...")
socket.close()