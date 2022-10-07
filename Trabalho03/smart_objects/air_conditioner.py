from base_object import BaseObject

from SmartObjectDetails_pb2 import AirConditionerDetails, AirConditionerMode, SmartObjectDetails


class AirConditioner(BaseObject):

    def __init__(self, temperature, mode):
        self.temperature = temperature
        self.mode = mode
        super().__init__()


    def to_proto(self):
        ac_details = AirConditionerDetails(temperature=self.temperature, mode=self.mode)
        return SmartObjectDetails(status=self.status, ip=self.ip, port=self.port, ac=ac_details,
                                  id=self.id)

    def update_internal_state(self, object_details: SmartObjectDetails):
        self.status = object_details.status
        self.temperature = object_details.ac.temperature
        self.mode = object_details.ac.mode



AirConditioner(23, AirConditionerMode.FAN_MODE)