# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: SmartObjectDetails.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18SmartObjectDetails.proto\"$\n\x11UpdateObjectReply\x12\x0f\n\x07success\x18\x01 \x01(\x08\"8\n\x10SmartObjectsList\x12$\n\x07objects\x18\x01 \x03(\x0b\x32\x13.SmartObjectDetails\"\xcb\x02\n\x12SmartObjectDetails\x12\x0e\n\x06status\x18\x01 \x01(\x08\x12\n\n\x02ip\x18\x02 \x01(\t\x12\x0c\n\x04port\x18\x03 \x01(\x05\x12\n\n\x02id\x18\x08 \x01(\t\x12\x1e\n\x05light\x18\x04 \x01(\x0b\x32\r.LightDetailsH\x00\x12.\n\x11luminosity_sensor\x18\x05 \x01(\x0b\x32\x11.LuminositySensorH\x00\x12$\n\x02\x61\x63\x18\x06 \x01(\x0b\x32\x16.AirConditionerDetailsH\x00\x12\x30\n\x0btemp_sensor\x18\x07 \x01(\x0b\x32\x19.TemperatureSensorDetailsH\x00\x12$\n\x0csmoke_sensor\x18\n \x01(\x0b\x32\x0c.SmokeSensorH\x00\x12\x1f\n\tsprinkler\x18\t \x01(\x0b\x32\n.SprinklerH\x00\x42\x10\n\x0eobject_details\"+\n\x0cLightDetails\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05\x63olor\x18\x02 \x01(\t\"1\n\x10LuminositySensor\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0f\n\x07reading\x18\x02 \x01(\x02\",\n\x0bSmokeSensor\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0f\n\x07reading\x18\x02 \x01(\x02\"\x19\n\tSprinkler\x12\x0c\n\x04name\x18\x01 \x01(\t\"O\n\x15\x41irConditionerDetails\x12\x13\n\x0btemperature\x18\x01 \x01(\x05\x12!\n\x04mode\x18\x02 \x01(\x0e\x32\x13.AirConditionerMode\"/\n\x18TemperatureSensorDetails\x12\x13\n\x0btemperature\x18\x01 \x01(\x05*F\n\x12\x41irConditionerMode\x12\x0c\n\x08\x46\x41N_MODE\x10\x00\x12\x0f\n\x0bSILENT_MODE\x10\x01\x12\x11\n\rEXTREME_CHILL\x10\x02\x32N\n\x11SmartObjectUpdate\x12\x39\n\x0cUpdateObject\x12\x13.SmartObjectDetails\x1a\x12.UpdateObjectReply\"\x00\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'SmartObjectDetails_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _AIRCONDITIONERMODE._serialized_start=757
  _AIRCONDITIONERMODE._serialized_end=827
  _UPDATEOBJECTREPLY._serialized_start=28
  _UPDATEOBJECTREPLY._serialized_end=64
  _SMARTOBJECTSLIST._serialized_start=66
  _SMARTOBJECTSLIST._serialized_end=122
  _SMARTOBJECTDETAILS._serialized_start=125
  _SMARTOBJECTDETAILS._serialized_end=456
  _LIGHTDETAILS._serialized_start=458
  _LIGHTDETAILS._serialized_end=501
  _LUMINOSITYSENSOR._serialized_start=503
  _LUMINOSITYSENSOR._serialized_end=552
  _SMOKESENSOR._serialized_start=554
  _SMOKESENSOR._serialized_end=598
  _SPRINKLER._serialized_start=600
  _SPRINKLER._serialized_end=625
  _AIRCONDITIONERDETAILS._serialized_start=627
  _AIRCONDITIONERDETAILS._serialized_end=706
  _TEMPERATURESENSORDETAILS._serialized_start=708
  _TEMPERATURESENSORDETAILS._serialized_end=755
  _SMARTOBJECTUPDATE._serialized_start=829
  _SMARTOBJECTUPDATE._serialized_end=907
# @@protoc_insertion_point(module_scope)
