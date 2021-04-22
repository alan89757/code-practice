var express = require("express");
var app = express();
var WebSocket = require("ws");

var wss = new WebSocket.Server({ port: 8080});

wss.on("connection", function connection(ws) {
  console.log("server: receive connection");
  ws.on("message", function incomming(message) {
    console.log("server: received: %s", message);
  });
  ws.send("world");
});

wss.on("close", function close() {

});

app.get("/", function(req, res) {
  res.sendfile(__dirname, "/index.html");
});

const port = 3000;
app.listen(port, function() {
  console.log(`port: ${port} is listening!`)
})
