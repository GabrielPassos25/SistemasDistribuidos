from flask import request
from src.server.instance import server

app = server.app

objects = []

class Object():
    @app.route('/objects', methods=['GET'])
    def get():
        return objects

    @app.route('/objects', methods=['POST'])
    def post():
        body = request.get_json()
        body["id"] = len(objects)
        objects.append(body)
        return {"status": 201, "mensagem": "Objeto criado com sucesso!"}

    @app.route('/objects/<int:id>', methods=['GET'])
    def get_by_id(id):
        try: 
            return objects[id]
        except IndexError:
            return {"status": 404, "mensagem": "Objeto não encontrado!"}

    @app.route('/objects/<int:id>', methods=['PUT'])
    def put(id):
        body = request.get_json()
        try:
            for key in body.keys():
                objects[id][key] = body[key]
            return {"status": 200, "mensagem": "Objeto atualizado com sucesso!"}
        except IndexError:
            return {"status": 404, "mensagem": "Objeto não encontrado!"}
