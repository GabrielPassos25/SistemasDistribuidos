#!/bin/sh

protoc -I=. --python_out=. *.proto

cp *.py ../smart_objects
cp *.py ../gateway/src/server
mv ../gateway/src/server/SmartObjectDetails_pb2.py ../gateway/src/controllers/SmartObjectDetails_pb2.py