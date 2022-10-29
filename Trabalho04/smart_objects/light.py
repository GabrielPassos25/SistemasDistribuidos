from base_object import BaseObject
from random import randint
from time import sleep
from threading import Thread

from SmartObjectDetails_pb2 import LightDetails, SmartObjectDetails


class Light(BaseObject):

    def __init__(self, name, color):
        self.object_type = "light"
        self.name = name
        self.color = color
        super().__init__()


    def to_proto(self):
        light_details = LightDetails(name=self.name, color=self.color)
        return SmartObjectDetails(status=self.status, ip=self.ip, port=self.port, light=light_details,
                                  id=self.id)

    def update_internal_state(self, object_details: SmartObjectDetails):
        self.status = object_details.status
        self.name = object_details.light.name
        self.color = object_details.light.color



Light("Luz da sala", "Azul")