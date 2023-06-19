const express = require("express");
const path = require("path")
const http = require("http");
const app = express();
const server = http.createServer(app);
const port = 3000;
const { Server } = require("socket.io");


const io = new Server(server);




app.get("/" , (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../clientside/index.html'));
})

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(port, () => {
    console.log(`Now listning too port ${port}`);
})