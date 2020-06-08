const WebSocket = require('ws');


const server = new WebSocket.Server({port: 8080});

server.on('conntection', ws => {
    ws.send('Добро пожаловать')
});
