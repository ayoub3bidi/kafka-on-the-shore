FROM confluentinc/cp-kafka

# Install dependencies
RUN apt-get update && apt-get install -y zookeeper

# Configure ZooKeeper
RUN echo "dataDir=/tmp/zookeeper" >> /etc/kafka/zookeeper.properties

# Expose ports for ZooKeeper and Kafka
EXPOSE 2181 9092

# Start ZooKeeper and Kafka
CMD zookeeper-server-start /etc/kafka/zookeeper.properties & kafka-server-start /etc/kafka/server.properties