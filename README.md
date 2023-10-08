# Kafka on the shore
This was my sandbox to understand & try Kafka as an essential technology for every Back-end engineer.  

## Requirements
You need to have docker, kafka-python , and Flask installed on your machine.

## Setup
### Run the zookeeper & kafka cluster
```
docker-compose -f docker-compose.yml up
```
This will run the zookeeper and the Kafka cluster. 
### Run clickhouse database
```
docker-compose -f docker-compose-clickhouse.yml exec clickhouse clickhouse-client
```
If you produce messages to a Kafka topic, you most likely have planned a destination for the messages. For example, the above snippet shows how you can write your own python consumer. Sometimes though, you would want to transport your messages to another database such as Clickhouse or Elasticsearch for further processing or visualizations.

This command will start the clickhouse container, you will get an interactive shell that allows you to run SQL commands. To create a table, run the following command:

```
-- create messages queue
CREATE TABLE default.message_queue
(
  created_at DateTime,
  content String,
  author String
)
ENGINE = Kafka(
  'kafka:9092',
  'posts',
  'clickhouse',
  'JSONEachRow'
) settings kafka_thread_per_consumer = 1, kafka_num_consumers = 1;
```
```
-- create messages table
CREATE TABLE default.messages
(
  created_at DateTime,
  content String,
  author String
)
ENGINE = MergeTree
ORDER BY created_at;

-- create materialized view
CREATE MATERIALIZED VIEW default.messages_mv
TO default.messages
AS SELECT * FROM default.message_queue;
```
### Run Flask
```
flask run
```
This will run flask on app.py

After running, you can try out the endpoint by executing a curl command:
```
curl -X POST -H "Content-Type: application/json" -d '{"author": "choyiny", "content": "Kafka is cool!"}' http://localhost:5000/posts
```
