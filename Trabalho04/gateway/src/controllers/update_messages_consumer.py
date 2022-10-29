import pika
from SmartObjectDetails_pb2 import SmartObjectDetails

class UpdateMessagesConsumer:

    def __init__(self, update_objects_function):
        self.update_objects_function = update_objects_function
        self.connection = pika.BlockingConnection(
            pika.ConnectionParameters(host='localhost'))
        self.channel = self.connection.channel()

        self.channel.exchange_declare(exchange='object_updates', exchange_type='topic')

        result = self.channel.queue_declare(queue='', exclusive=True)
        queue_name = result.method.queue

        self.channel.queue_bind(exchange='object_updates', queue=queue_name, routing_key="*")

        self.channel.basic_consume(
            queue=queue_name, on_message_callback=self.callback, auto_ack=True)

        self.channel.start_consuming()

    def callback(self, ch, method, properties, body):
        print("Got update message")
        object_details = SmartObjectDetails()
        object_details.ParseFromString(body)
        print(object_details)
        self.update_objects_function(object_details)

