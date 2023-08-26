const { Kafka } = require("kafkajs");

run();
async function run() {
    // Introduce a delay of 5 seconds (5000 milliseconds)
    await new Promise(resolve => setTimeout(resolve, 5000));

    try {
        const kafka = new Kafka({
            clientId: "myapp",
            brokers: ["kafka:9092"]
        });

        const admin = kafka.admin();
        console.log("Connecting to Kafka...");
        await admin.connect();
        console.log("Connected to Kafka!");

        const topicConfig = {
            topics: [
                {
                    topic: "Users",
                    numPartitions: 2,
                    replicationFactor: 1
                }
            ]
        };

        console.log("Creating topic...");
        await admin.createTopics(topicConfig);
        console.log("Topic created successfully!");

        await admin.disconnect();
    } catch (ex) {
        console.error(`Something bad happened: ${ex}`);
    } finally {
        process.exit(0);
    }
}
