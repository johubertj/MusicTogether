const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000 || 3001;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//purpose -> looks for event 'connection' from client side, and will
//run call back function after event is done
const currentUsers = [];
io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) return callback(error);

        //message when user joins the room
        socket.emit('message', { user: 'admin', test: `${user.name}, Welcome to the room ${user.room}` });
        
        currentUsers.push(name);
        socket.emit("connected", name);
        socket.emit("users", Object.values(currentUsers));

        //broadcast-> emits to everyone except user a message
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!` });

        //places user into a specific room
        socket.join(user.room);

        callback();
    })

    //purpose -> looks for a disconnect event during connected event
    socket.on('disconnect', (name) => {
        console.log('user left');
        socket.emit("disconnected", name);
    })
});

app.use(router);

//purpose -> The app.listen() function is used to bind and listen the connections on the specified host and port
server.listen(PORT, () => console.log(`server ${PORT}`))