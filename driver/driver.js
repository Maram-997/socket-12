'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3003/caps';
const connectionFromCaps = io.connect(host);


connectionFromCaps.on('pickup',(payload)=>{
        setInterval(()=>{
        console.log(`picking up ${payload.orderId}`);
        connectionFromCaps.emit('in-transit', (payload));
    },1500);
    setInterval(()=>{
        console.log(`DELIVERED ${payload.orderId}`);
        connectionFromCaps.emit('delivered', (payload));
    },3000);
    });



