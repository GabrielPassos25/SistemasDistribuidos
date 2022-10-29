from base_object import BaseObject, ObjectTypes
from random import randint
from time import sleep
from threading import Thread

from SmartObjectDetails_pb2 import SmartObjectDetails, \
    SmokeSensor as SmokeSensorProto


class SmokeSensor(BaseObject):

    def __init__(self, initial):
        self.object_type = ObjectTypes.SMOKE_SENSOR
        self.reading = initial
        Thread(target=self.update_reading).start()

        super().__init__()

    def update_reading(self):
        while True:
            sleep(5)
            print("Updating smoke readings")
            self.reading = min(randint(self.reading - 8, randint(self.reading, self.reading + 8)), 100)

    def to_proto(self):
        sensor = SmokeSensorProto(reading = self.reading)
        return SmartObjectDetails(status=self.status, ip=self.ip, port=self.port, smoke_sensor=sensor, id=self.id)

    def update_internal_state(self, object_details: SmartObjectDetails):
        self.status = object_details.status


SmokeSensor(31)