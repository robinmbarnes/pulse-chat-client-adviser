var socket = require('socket.io-client')('http://localhost:8901');

socket.on('connect', function(){
    console.log('pulse-chat-client-adviser connected to server');
});