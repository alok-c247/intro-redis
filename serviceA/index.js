import express from "express";
import axios from "axios";
import redis from "redis";

const app = express();

const port = 3001;

// make a connection to the local instance of redis
let redisClient;

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));
  redisClient.on("ready", () => console.error(`✅ Redis ready for Service A`));

  await redisClient.connect();
})();

const c = "baaaasss";

app.get("/photos", async (req, res) => {
  try {
    const albumId = req.query.albumId;
  

    // Check the redis store for the data first
    const cache = await redisClient.get(`photos?albumId=${albumId}`);

    if (cache) { // cache-hit
      return res.status(200).send({
        error: false,
        message: `Fetched from the cache`,
        data: JSON.parse(cache),
      });
    } else { // cache-miss

      // When the data is not found in the cache then we can make request to the server or from database
      //db call
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/photos${
          albumId ? `?albumId=${albumId}` : ""
        } `
      );

      // save the record in the cache for subsequent request
      redisClient.set(`photos?albumId=${albumId}`, JSON.stringify(data.data), {
        EX: 20, // Set the specified expire time, in seconds.
        NX: true, // Only set the key if it does not already exist.
      });

      // PUB/SUB example
      await redisClient.publish("channel", "msg from service A - server api called.");

      // return the result to the client
      return res.status(200).send({
        error: false,
        message: `Fetch from api server`,
        data: data.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});

export default app;
