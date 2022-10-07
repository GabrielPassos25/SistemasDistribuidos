from base_object import BaseObject

from SmartObjectDetails_pb2 import TvDetails, SmartObjectDetails


class Tv(BaseObject):

    def __init__(self, channel, volume):
        self.channel = channel
        self.volume = volume
        super().__init__()


    def to_proto(self):
        tv_details = TvDetails(channel=self.channel, volume=self.volume)
        return SmartObjectDetails(status=self.status, ip=self.ip, port=self.port, tv=tv_details,
                                  id=self.id)

    def update_internal_state(self, object_details: SmartObjectDetails):
        self.status = object_details.status
        self.channel = object_details.tv.channel
        self.volume = object_details.tv.volume



Tv("10.1", 20)