# Kafka
This was my sandbox to understand & try Kafka as an essential technology for every Back-end engineer.  

In this project, I tried to create a **Topic**, **Producer**, and a **Consumer** with [kafkajs](https://github.com/tulios/kafkajs).  

I hope this can help you too :)

## requirements
You need to have only docker & node.js installed.

## Setup
```
docker-compose up
```
This will run the zookeeper and the Kafka cluster.  
## Commands
```
node topic.js
```
This will run the topic.

```
node producer.js
```
This will run the producer.
```
node consumer.js
```
This will run the consumer.js
