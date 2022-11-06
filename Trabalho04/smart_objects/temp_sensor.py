from base_object import BaseObject, ObjectTypes
from random import randint
from time import sleep
from threading import Thread
import pika
from SmartObjectDetails_pb2 import TemperatureSensorDetails, SmartObjectDetails


class TemperatureSensor(BaseObject):

    def __init__(self, initial):
        self.object_type = ObjectTypes.TEMPERATURE_SENSOR
        self.temperature = initial
        self.is_ac_on = False
        self.last_ac_temperature = initial
        Thread(target=self.update_temperature).start()

        super().__init__()
        self.rabbit_mq_consumer_connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
        self.watch_smart_object_events(connection=self.rabbit_mq_consumer_connection,
                                       callback=self.ac_temperature_callback,
                                       object_type=ObjectTypes.AIR_CONDITIONER)
        self.grpc_server.wait_for_termination()

    def ac_temperature_callback(self, ch, method, properties, body):
        object_details = SmartObjectDetails()
        object_details.ParseFromString(body)

        self.is_ac_on = object_details.status
        self.last_ac_temperature = object_details.ac.temperature

        ch.basic_ack(delivery_tag=method.delivery_tag)


    def update_temperature(self):
        while True:
            sleep(5)

            if self.is_ac_on:
                # temperature reading must converge to ac temperature
                if self.last_ac_temperature > self.temperature:
                    self.temperature = randint(self.temperature, self.temperature + 4)
                if self.last_ac_temperature <= self.temperature:
                    self.temperature = randint(self.temperature - 4, self.temperature)
            else:
                # if ac is off, temperature will probably increase
                self.temperature = randint(self.temperature - 1, self.temperature + 2)

    def to_proto(self):
        sensor = TemperatureSensorDetails(temperature = self.temperature)
        return SmartObjectDetails(status=self.status, ip=self.ip, port=self.port, temp_sensor=sensor,
                                  id=self.id)

    def update_internal_state(self, object_details: SmartObjectDetails):
        self.status = object_details.status
        self.temperature = object_details.temp_sensor.temperature


TemperatureSensor(44)