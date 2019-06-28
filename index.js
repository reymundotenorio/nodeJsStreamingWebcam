const express = require("express");
const app = express();
const path = require("path");
const router = app.Router();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const Log = require("log");

const log = new Log("debug");

const port = process.env.port || 3000;

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

router.get("/visitors", (req, res) => {
  res.sendFile(path.join(__dirname, "visitors.html"));
});

// Add the router
app.use("/", router);

// setInterval(() => {
//   io.emit("image", "Hello");
// }, 1000);

// Running server
server.listen(port, () => {
  log.info(`Server listening por ${port}`);
});
