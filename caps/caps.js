'use strict';
const port = 3003;
const io = require('socket.io')(port); // http://localhost:3003
// namespace 
const caps = io.of('/caps'); // http://localhost:3003/caps
///////
// on for Listening to events
// emit for Launching the events
///////


// io.on('connection' , (socket) =>
// {
//     console.log('in the CAPS File');
// })

caps.on('connection', (socket) => {
    console.log('CONNECTED TO THE CAPS NAMESPACE');

    socket.on('pickup', (payload) => {
        console.log("EVENT : { event : 'pickup'", {
            "Data": new Date().toDateString(),
            "payload": payload
        })
        caps.emit('pickup', (payload))
    })
    socket.on('in-transit', (payload) => {
        console.log("EVENT : { event : 'in-transit'", {
            "Data": new Date().toDateString(),
            "payload": payload
        })
        caps.emit('in-transit', (payload))

    })
    socket.on('delivered', (payload) => {
        console.log("EVENT : { event : 'delivered'", {
            "Data": new Date().toDateString(),
            "payload": payload
        })
        caps.emit('delivered', (payload))

    })

})