var express = require('express');
var socket = require('socket.io');
var path = require('path');

// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

app.set('view engine','ejs')
// Static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.render('home')
})
// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);
    socket.on('chat',(data)=>{
        io.sockets.emit('chat', data)    
     })

     socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data)
     })
});



