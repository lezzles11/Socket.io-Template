var app = require("express")();
var server = require("http").createServer(app);

// Initialize a new instance, passing http in it
var io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Listen on the connection event for incoming sockets

io.on("connection", (socket) => {
  console.log("a user connected");
  // on a chat message
  socket.on("chat message", (msg) => {
    // emit the message
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
server.listen(3000, () => {
  console.log("listening on *:3000");
});
