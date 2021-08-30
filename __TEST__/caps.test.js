'use strict';

const caps = require('../caps/caps');
const jest = require('jest');
const supertest = require('supertest');

const driverHandler = require('../driver/driver');
const vendorHandler = require('../vendor/vendor');



let payload = {
    store: 'store',
    orderId: 123,
    CustomerName: 'Maram',
    address: 'LEB'
}
describe('events-Driven Programming', () => {
    it('should test the driver', () => {
        driverHandler.emit('pickup', payload).toBeTruthy();
        driverHandler.emit('delivered', payload).toBeTruthy();

    });
    it('should test the vendor', ()=>{
        vendorHandler.emit('pickup' , payload).toBeTruthy();
        driverHandler.emit('delivered', payload).toBe('THANK YOU.');
    })
})