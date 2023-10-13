import express from "express";
import redis from "redis";

const app = express();

const port = 3003;

// make a connection to the local instance of redis
let redisClient;

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));
  redisClient.on("ready", () => console.error(`✅ Redis ready for Service C`));

  await redisClient.connect();
})();

redisClient.subscribe("channel_1", (err, count) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Subscribed to " + count + " channels");
  }
});

redisClient.on("message", async (channel, message) => {
  console.log(`Receive ${message} from ${channel}`);
  try {
  } catch (err) {
    console.log("err in redis msg", err);
  }
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});

export default app;
