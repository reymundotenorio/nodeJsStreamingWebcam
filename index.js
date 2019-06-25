const path = require("path");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const vCap = new cv.VideoCapture(0);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log("Listening port 3000...");
});

setInterval(() => {
  io.emit("image", "Hello");
}, 1000);

server.listen(3000);
