require('./config/config');
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var port = process.env.PORT;
const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', function (socket) {
  console.log('A user is connected');

  socket.on('disconnect', function () {
    console.log('User is logout');
  });

  socket.emit('newMessage', {
    from: 'User',
    text: 'Hey!',
    createdAt: '123'
  });

  socket.on('createMessage', function (message) {
    console.log('createMessage', message);
  });
});


server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
