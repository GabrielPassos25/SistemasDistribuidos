from flask import request
from src.server.instance import server

from .SmartObjectDetails_pb2 import SmartObjectDetails, SmartObjectsList

app = server.app

objects = []

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
        return None, 201

    @app.route('/objects/<str:id>', methods=['GET'])
    def get_by_id(id):
        try:
            object = next(filter(lambda e: e.id == id, objects))
            return object.SerializeToString(), 200
        except StopIteration:
            return {"status": 404, "mensagem": "Objeto não encontrado!"}, 404

    @app.route('/objects/<int:id>', methods=['PUT'])
    def put(id):
        body = request.get_json()
        try:
            for key in body.keys():
                objects[id][key] = body[key]
            return {"status": 200, "mensagem": "Objeto atualizado com sucesso!"}, 200
        except IndexError:
            return {"status": 404, "mensagem": "Objeto não encontrado!"}, 404
