from SmartObjectDetails_pb2_grpc import SmartObjectUpdateServicer
from SmartObjectDetails_pb2 import UpdateObjectReply
import SmartObjectDetails_pb2_grpc

class ObjectGRPCServer(SmartObjectUpdateServicer):
    def __init__(self, base_object):
        self.base_object = base_object

    def UpdateObject(self, request, context):
        print("Updating object internal state..")
        print(request)
        self.base_object.update_internal_state(request)
        return UpdateObjectReply(success = True)