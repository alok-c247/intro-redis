import express from "express";
import redis from "redis";

const app = express();

const port = 3002;
const key = "asasokodskod";

// make a connection to the local instance of redis
let redisClient;

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));
  redisClient.on("ready", () => console.error(`✅ Redis ready for Service B`));

  await redisClient.connect();

  redisClient.subscribe("channel", (message) => {
    if (message) {
      console.log("New msg:", message);
    }
  });

})();


app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});

export default app;
