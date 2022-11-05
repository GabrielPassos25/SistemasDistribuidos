from base_object import BaseObject, ObjectTypes
from random import randint
from time import sleep
from threading import Thread

from SmartObjectDetails_pb2 import SmokeSensor, SmartObjectDetails, Sprinkler as SprinklerProto
import pika


class Sprinkler(BaseObject):

    def __init__(self, name):
        self.object_type = ObjectTypes.SPRINKLER
        self.name = name
        super().__init__(status=False)
        self.rabbit_mq_consumer_connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
        self.watch_smart_object_events(connection=self.rabbit_mq_consumer_connection,
                                       callback=self.smoke_sensor_change_callback,
                                       object_type=ObjectTypes.SMOKE_SENSOR)
        self.grpc_server.wait_for_termination()

    def smoke_sensor_change_callback(self, ch, method, properties, body):
        object_details = SmartObjectDetails()
        object_details.ParseFromString(body)

        reading = object_details.smoke_sensor.reading

        if reading < 50:
            print("Desligando sprinkler")
            self.status = False
        elif reading >= 70:
            print("Ligando sprinkler")
            self.status = True

        ch.basic_ack(delivery_tag=method.delivery_tag)

    def to_proto(self):
        sprinkler = SprinklerProto(name=self.name)
        return SmartObjectDetails(status=self.status, ip=self.ip, port=self.port, sprinkler=sprinkler,
                                  id=self.id)

    def update_internal_state(self, object_details: SmartObjectDetails):
        self.status = object_details.status
        self.name = object_details.sprinkler.name


Sprinkler("Sprinkler da cozinha")