# INTRODUCTION TO REDIS

Redis is an open source, in-memory data structure store used as a database, cache, message broker, and streaming engine. 

Redis delivers sub-millisecond response times enabling millions of requests per second for real-time applications in Gaming, IoT, Social Networking, Financial Services, Healthcare Industry, and Ad Tech.

 Redis is a popular choice for -
 - caching
 - session management
 - gaming & leaderboards
 - real-time analytics
 - geospatial
 - chat/messaging
 - media streaming


> Redis can be persistent also.
> Persistence refers to the writing of data to durable storage,
> such as a solid-state disk (SSD). 

## Install redis-
- Windows - https://redis.io/docs/getting-started/installation/install-redis-on-windows/
- Linux - https://redis.io/docs/getting-started/installation/install-redis-on-linux/

Once you have Redis up and running, and can connect using ``` redis-cli ```, you can continue with the steps below.

![image](https://github.com/alok-c247/intro-redis/assets/108002754/0969170b-e3aa-4f9e-9d71-4932cda289be)


## Date structure

![Redis-v2-separate-08](https://github.com/alok-c247/intro-redis/assets/108002754/50b9a274-efd1-41b3-b930-35eee7c34793)


## Use Case

### - Caching 
The cache is temporary storage where data is stored so that in the future data can be accessed faster.

Cache patterns - https://codeahoy.com/2017/08/11/caching-strategies-and-how-to-choose-the-right-one/

### - Pub/Sub 
Redis supports Pub/Sub with pattern matching and many different varieties of data structures such as lists, sorted sets, and hashes. This allows Redis to support high-performance chat rooms, real-time comment streams, social media feeds and server intercommunication.

![1_fhtNuZ4zPWNrHWiO7gi29w](https://github.com/alok-c247/intro-redis/assets/108002754/e2ff11d6-7e61-4be5-b4fe-20e9e0bfe686)

## Installation

- Install redis in local machine
- ```npm i ``` in every service directory 

## Start local server
- Connect redis by running ``` redis-cli ``` in terminal
- Run ```npm run dev ``` in every service directory.
