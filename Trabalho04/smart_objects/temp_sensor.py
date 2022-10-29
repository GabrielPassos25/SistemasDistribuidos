from base_object import BaseObject
from random import randint
from time import sleep
from threading import Thread

from SmartObjectDetails_pb2 import TemperatureSensorDetails, SmartObjectDetails


class TemperatureSensor(BaseObject):

    def __init__(self, initial):
        self.object_type = "temp_sensor"
        self.temperature = initial
        Thread(target=self.update_temperature).start()

        super().__init__()

    def update_temperature(self):
        while True:
            sleep(15)
            self.temperature = randint(self.temperature - 4, randint(self.temperature, self.temperature + 4))

    def to_proto(self):
        sensor = TemperatureSensorDetails(temperature = self.temperature)
        return SmartObjectDetails(status=self.status, ip=self.ip, port=self.port, temp_sensor=sensor,
                                  id=self.id)

    def update_internal_state(self, object_details: SmartObjectDetails):
        self.status = object_details.status


TemperatureSensor(44)