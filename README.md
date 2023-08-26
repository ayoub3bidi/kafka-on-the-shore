# Kafka
This was my sanbox to understand & try Kafka as an important technologie for every Back-end engineer.  

In this project I tried to create a **Topic**, **Producer**, and a **Consumer** with [kafkajs](https://github.com/tulios/kafkajs).  

I hope this can help you too :)

## Setup
To make the code work locally on your machine you should have docker installed on your machine, then follow these steps:

### Spin up the Zookeeper
```
docker run --name zookeeper -p 2181:2181 zookeeper
```
This will start the Zookeeper on port `2181:2181`

### Spin up the kafka cluster (single)
### Create **Topic** with kafkajs
### Create **Producer** with kafkajs
### Create **Consumer** with kafkajs