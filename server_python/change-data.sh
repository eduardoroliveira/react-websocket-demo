#!/bin/bash

if [ "$1" == "1" ]; then
    cp data/just-lion.json data.json
elif [ "$1" == "2" ]; then
    cp data/ant-eagle.json data.json
elif [ "$1" == "3" ]; then
    cp data/three-animals.json data.json
else
    echo "usage: change-data.sh [1|2|3]"
fi