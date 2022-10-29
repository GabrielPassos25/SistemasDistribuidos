from base_object import BaseObject, ObjectTypes
from random import randint
from time import sleep
from threading import Thread

from SmartObjectDetails_pb2 import LightDetails, SmartObjectDetails
import pika

class Light(BaseObject):

    def __init__(self, name, color):
        self.object_type = ObjectTypes.LIGHT
        self.name = name
        self.color = color
        super().__init__(status=False)
        self.rabbit_mq_consumer_connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
        self.watch_smart_object_events(connection=self.rabbit_mq_consumer_connection,
                                       callback=self.light_sensor_change_callback,
                                       object_type=ObjectTypes.LUMINOSITY_SENSOR)

    def light_sensor_change_callback(self, ch, method, properties, body):
        object_details = SmartObjectDetails()
        object_details.ParseFromString(body)

        reading = object_details.luminosity_sensor.reading

        if reading < 30:
            print("Ligando lampada")
            self.status = True
        elif reading >= 50:
            print("Desligando lampada")
            self.status = False

        ch.basic_ack(delivery_tag=method.delivery_tag)

    def to_proto(self):
        light_details = LightDetails(name=self.name, color=self.color)
        return SmartObjectDetails(status=self.status, ip=self.ip, port=self.port, light=light_details,
                                  id=self.id)

    def update_internal_state(self, object_details: SmartObjectDetails):
        self.status = object_details.status
        self.name = object_details.light.name
        self.color = object_details.light.color



Light("Luz da sala", "Azul")