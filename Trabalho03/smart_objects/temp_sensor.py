from base_object import BaseObject
from random import randint

from SmartObjectDetails_pb2 import TemperatureSensorDetails, SmartObjectDetails


class TemperatureSensor(BaseObject):

    def __init__(self, randomness, initial):
        self.temperature = initial
        self.randomness = randomness
        self.to_proto()
        BaseObject.__init__(self)

    def to_proto(self):
        print("Aqui na classe filha")
        sensor = TemperatureSensorDetails(temperature = self.temperature)
        return SmartObjectDetails(status=True, ip=self.ip, port=self.port, temp_sensor=sensor,
                                  id=self.id)

    def update_internal_state(self, object_details: SmartObjectDetails):
        self.status = object_details.status


TemperatureSensor(12, 44)