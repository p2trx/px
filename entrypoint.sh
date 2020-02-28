#!/bin/bash

set -xe

echo "Entrypoint"

cd /px

npm install

xvfb-run -s "-screen 0 $DISPLAY_CONFIGURATION" npm start