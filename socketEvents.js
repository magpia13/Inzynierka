exports = module.exports = function(io) {
  io.on('connection', function(socket) {
   // socket.join('general');
 // socket.on('connectedUser', (users) =>{
 //  console.log(users);
 //        socket.name = users;
 //        userss.push(socket.name);
 //        io.sockets.emit('connectedUser', userss);
 //    });
    socket.on('chat mounted', function(user) {
      socket.emit('receive socket', socket.id)
    })
    socket.on('leave channel', function(channel) {
      socket.leave(channel)
    })
    socket.on('join channel', function(channel) {
      socket.join(channel.name)
    })
    socket.on('send message', function(msg) {
      console.log(msg);
     io.sockets.emit('new message',msg);
    });
    socket.on('new channel', function(channel) {
      io.sockets.emit('new channel', channel)
    });
    socket.on('typing', function (data) {
      socket.broadcast.to(data.channel).emit('typing bc', data.user);
    });
    socket.on('stop typing', function (data) {
      socket.broadcast.to(data.channel).emit('stop typing bc', data.user);
    });
    socket.on('new private channel', function(socketID, channel) {
      socket.broadcast.to(socketID).emit('receive private channel', channel);
    })
  });
}
 