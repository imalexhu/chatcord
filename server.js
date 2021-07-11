const http = require('http');
const path = require('path')
const socket = require('socket.io');
const express = require('express');

const app = express();
const server = http.createServer(app);
const io = socket(server);


app.use(express.static(path.join(__dirname, '_html_css')))

io.on('connection', socket => {
    console.log("New websocket connection")

    socket.emit('message', 'Hello welcome to the server');

    socket.broadcast.emit('message', 'A user has joined the chat');

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat')
    })

    socket.on('chatMessage',(msg)=>{
        io.emit('message',msg);
    })
});

//Set static folder


const PORT = 3000 || process.env.PORT;

server.listen(PORT, console.log(`Server is running on ${PORT}`))