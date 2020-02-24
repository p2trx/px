"""Runs protoc with the gRPC plugin to generate messages and gRPC stubs."""

import os
import sys
from grpc_tools import protoc

os.chdir(sys.path[0])

protoc.main((
    '',
    '--proto_path=../proto',
    '--python_out=px',
    '--grpc_python_out=px',
    '../proto/px.proto',
))
