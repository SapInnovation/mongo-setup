#!/usr/bin/env bash

echo ******************************************************
echo Starting the replica set
echo ******************************************************

sleep 10 | echo Sleeping
mongo mongodb://mongo-primary:27017 replicaSet.js