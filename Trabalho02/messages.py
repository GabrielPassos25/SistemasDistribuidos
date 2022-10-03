import json

def encode_message(msg_type, body):
    full_message = {
        "op_type": msg_type,
        "body": body
    }

    return json.dumps(full_message).encode("UTF8")

def decode_message(body):
    decoded_body = json.loads(body.decode("UTF8"))
    return decoded_body["op_type"], decoded_body.get("body")

class ClientMessageTypes:
    SEND_MESSAGE = "SEND_MSG"
    LIST_USERS = "LIST_USERS"
    EXIT = "EXIT"
    USERNAME = "USERNAME"


class ServerMessageTypes:
    USER_JOINED = "USR_JOIN"
    NEW_MESSAGE = "RECV_MSG"
    USERS_LIST = "USERS_LIST"
    USER_EXITED = "USR_EXIT"

BUFFER_SIZE = 65536