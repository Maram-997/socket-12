'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3003/caps'

const connectionFromCaps = io.connect(host);
const faker = require('faker');
const store = faker.company.companyName();

setInterval(()=>{
    let payload = {
        store : store,
        orderId : faker.datatype.number(),
        customerName : faker.name.firstName(),
        address : faker.address.cityName()
    }
    connectionFromCaps.emit('pickup', payload);
   
},5000);

connectionFromCaps.on('delivered' , (payload)=>{
    console.log(`thank you for delivering ${payload.orderId}`)
 });
