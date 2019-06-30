const express = require("express");
const app = express();
const path = require("path");
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/visitors", (req, res) => {
  res.sendFile(path.join(__dirname, "public/visitors.html"));
});

// Listening new client connection
io.on("connection", socket => {
  // Listining strem petition by socket
  socket.on("stream", stream => {
    // Send video by socket
    socket.broadcast.emit("stream", stream);
  });
});

// Running server
server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/`);
});
