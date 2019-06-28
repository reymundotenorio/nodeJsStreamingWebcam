const express = require("express");
const app = express();
const path = require("path");
const router = app.Router();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const Log = require("log"),
  log = new Log("debug");
const port = process.env.port || 3000;

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

router.get("/visitors", (req, res) => {
  res.sendFile(path.join(__dirname, "visitors.html"));
});

// Add the router
app.use("/", router);

// Listening new client connection
io.on("connection", socket => {
  // Listining strem petition by socket
  socket.on("stream", video => {
    // Send video by socket
    socket.broadcast.emit("stream", video);
  });
});

// Running server
server.listen(port, () => {
  log.info(`Server listening por ${port}`);
});
