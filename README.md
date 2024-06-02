# Compiler API

### Introduction

This is a API to compile code for the Pluto Drone we need to compile 

### What does this do?

This compiles cpp code from the PlutoBlocks Mobile App to generate a hex file which can then be flashed on the drone through the PlutoController App


### Environment
-  [ARM Compiler for Cortex M4](https://developer.arm.com/downloads/-/gnu-rm/6-2017-q1-update)
- [Node](https://nodejs.org/en/download)
- [Redis](https://redis.io/)

### How to use
Clone this repo
```
git clone https://github.com/sokumon/compilerapi
```
Change directory
```
cd compilerapi
```
Install packages
```
npm install 
```
Start the server 
```
node app.js
```

Start redis
```
sudo apt-get update
sudo apt-get install redis-server
redis-server --daemonize yes
```

To check if Redis is setup properly
```
redis-cli ping
```

Install Redis
```
npm install -g pm2
```



### Production Use

This is an article for you to deploy it on a VM instance in the cloud 
[Article](https://www.freecodecamp.org/news/deploy-nodejs-app-server-to-production/)


