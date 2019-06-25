const path = require("path");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const socket = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log("Listening port 3000...");
});

server.listen(3000);
