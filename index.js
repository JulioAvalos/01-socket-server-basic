// Servidor de express
const express = require('express');
const app = express();

// Servidor de sockets 
const server = require("http").createServer(app);

// Configuracion del socket server
const io = require("socket.io")(server);

// Desplegar el directorio publico
app.use(express.static(__dirname + '/public'));

io.on("connection", (socket) => {
    // console.log(socket.id);
    socket.emit('mensaje-bienvenida', {
        msg: 'Bienvenido al server',
        fecha: new Date()
    });
});

server.listen(8080, () => {
    console.log('Server corriendo en puerto :8080');
});
