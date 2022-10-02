import socket
import operator # https://stackoverflow.com/questions/1740726/turn-string-into-operator

operations = {
    "+": operator.add,
    "-": operator.sub,
    "*": operator.mul,
    "/": operator.truediv,
}

HOST = "127.0.0.1" # The server's hostname or IP address
PORT = 5000 # The port used by the server

socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
socket.bind((HOST, PORT))

print("Servidor iniciado na porta " + str(PORT))

while True:
    # Get message from client
    data, addr = socket.recvfrom(5000)
    message = data.decode('utf-8')
    
    # Check if client wants to exit
    if(message == "exit"):
        print("Encerrando servidor...")
        socket.close()
        break
    print("Endereço e mensagem recebida: {} --> {}".format(addr, message))

    # Manipulate message
    first_operator, operation, second_opearator = message.split(" ")

    # Calculate result if valid
    try:
        result = operations[operation](int(first_operator), int(second_opearator))
    
    # If invalid operation, send error message
    except:
        result = "Operação inválida"
    print("Resultado: " + str(result))

    # Send result to client
    socket.sendto(str(result).encode('utf-8'), addr)

    print("--------------------------")