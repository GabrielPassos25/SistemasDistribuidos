from flask import request
from src.server.instance import server

from .SmartObjectDetails_pb2 import SmartObjectDetails, SmartObjectsList
from socket import socket, AF_INET, SOCK_STREAM

app = server.app

objects = []

def update_objects_list(object_details):
    object = next(filter(lambda e: e.id == object_details.id, objects))
    for i in range(len(objects)):
        if objects[i].id == object.id:
            objects[i] = object_details
            return {"status": 200, "mensagem": "Objeto atualizado com sucesso!"}, 200

def request_object_state_update(object_detail):
    object_socket = socket(AF_INET, SOCK_STREAM)
    object_socket.connect((object_detail.ip, int(object_detail.port)))
    object_socket.send(object_detail.SerializeToString())
    object_socket.close()

class Object():
    @app.route('/objects', methods=['GET'])
    def get():
        objects_list = SmartObjectsList(objects=objects)
        return objects_list.SerializeToString(), 200

    @app.route('/objects', methods=['POST'])
    def post():
        object_details = SmartObjectDetails()
        object_details.ParseFromString(request.data)
        objects.append(object_details)
        return "", 201

    @app.route('/objects/<string:id>', methods=['GET'])
    def get_by_id(id):
        try:
            object = next(filter(lambda e: e.id == id, objects))
            return object.SerializeToString(), 200
        except StopIteration:
            return {"status": 404, "mensagem": "Objeto não encontrado!"}, 404

    @app.route('/objects/<string:id>', methods=['PUT'])
    def update(id):
        object_details = SmartObjectDetails()
        object_details.ParseFromString(request.data)
        response = update_objects_list(object_details)
        request_object_state_update(object_details)
        return response

    @app.route('/objects/refresh/<string:id>', methods=['PUT'])
    def object_refresh(id):
        object_details = SmartObjectDetails()
        object_details.ParseFromString(request.data)
        return update_objects_list(object_details)
