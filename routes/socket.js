var express = require('express');
var router = express.Router();

module.exports = (io) => {
    io.on('connection', socket => {
        let { id } = socket;
        console.log('new connection id:', id);

        socket.on('disconnect', socket => {
            console.log('disconnect id:', id);
        });
    });

    return router;
}