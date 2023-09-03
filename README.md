# Kafka on the shore
This was my sandbox to understand & try Kafka as an essential technology for every Back-end engineer.  

## requirements
You need to have only docker & `kafka-python` installed on your machine.

## Setup
```
docker-compose -f docker-compose-zookeeper-kafka.yml up --build --force-recreate
```
This will run the zookeeper and the Kafka cluster.  
