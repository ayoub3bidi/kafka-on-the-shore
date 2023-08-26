# Kafka
This was my sanbox to understand & try Kafka as an important technologie for every Back-end engineer.  

In this project I tried to create a **Topic**, **Producer**, and a **Consumer** with [kafkajs](https://github.com/tulios/kafkajs).  

I hope this can help you too :)

## Setup
To make the code work locally on your machine you should have docker installed on your machine, then follow these steps:

**Note:** Every step should stay running in a sperate terminal to make all the operation work properly.

### Spin up the Zookeeper
```
docker run --name zookeeper -p 2181:2181 zookeeper
```
This will start the Zookeeper on port `2181`.

### Spin up the kafka cluster (single)
```
docker run --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=localhost:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka
```
This will run kafka on port `9092` with 3 environment variables that we need to connect with the Zookeeper that we ran in the previous step.

### Create **Topic** with kafkajs
### Create **Producer** with kafkajs
### Create **Consumer** with kafkajs