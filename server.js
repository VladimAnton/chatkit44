const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + "/public"));
 
app.get('/', function(req, res){
  res.sendfile('index.html');
});
 
 
// socket.on - приём сообщения
// io.emit - отправка сообщения
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
 
http.listen(app.get('port'), function() {
    console.log('Server listens on port', app.get('port'));
});