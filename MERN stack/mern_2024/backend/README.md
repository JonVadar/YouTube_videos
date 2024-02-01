# MERN stack backend notes

## 👉 Install the dependencies using `npm install`

## [![Watch the video here](https://i3.ytimg.com/vi/rAOuOcXz81E/maxresdefault.jpg)](https://youtu.be/rAOuOcXz81E)

## Creating a server using Node.JS

```js
// Create a server with plain Node.js
const http = require("http");

//create a server object:
http
  .createServer((req, res) => {
    res.writeHead(200, "Success", { "Content-Type": "text/html" }); //set headers

    res.write("Hello World!"); //write a response to the client

    console.log(req.headers, req.url);

    res.end(); //end the response
  })
  .listen(4000, "localhost"); //the server object listens on port 4000
```

## Connecting to DB using MongoDB package

```js
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/demo_db";

MongoClient.connect(uri)
  .then(() => console.log("Connected Successfully!"))
  .catch((err) => console.log(err));
```
