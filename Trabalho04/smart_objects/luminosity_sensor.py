from base_object import BaseObject, ObjectTypes
from random import randint
from time import sleep
from threading import Thread

from SmartObjectDetails_pb2 import TemperatureSensorDetails, SmartObjectDetails, \
    LuminositySensor as LuminositySensorProto


class LuminositySensor(BaseObject):

    def __init__(self, initial):
        self.object_type = ObjectTypes.LUMINOSITY_SENSOR
        self.luminance = initial
        Thread(target=self.update_luminance).start()

        super().__init__()

    def update_luminance(self):
        while True:
            sleep(5)
            print("Updating luminance")
            self.luminance = min(randint(self.luminance - 4, randint(self.luminance, self.luminance + 4)), 100)

    def to_proto(self):
        sensor = LuminositySensorProto(reading = self.luminance)
        return SmartObjectDetails(status=self.status, ip=self.ip, port=self.port, luminosity_sensor=sensor, id=self.id)

    def update_internal_state(self, object_details: SmartObjectDetails):
        self.status = object_details.status


LuminositySensor(31)