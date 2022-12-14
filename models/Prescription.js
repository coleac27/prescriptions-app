const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Define collection and schema for Prescription */
let Prescription = new Schema({
    email: {
        type: String
    },
    rx: {
        type: String
    },
    name: {
        type: String
    },
    dosage: {
        type: String
    },
    quantity: {
        type: Number
    },
    vendor: {
        type: String
    },
    price: {
        type: Number
    },
    refill: {
        type: Date
    },
    url: {
        type: String
    }
},{
    //collection: 'Current Prescriptions'
    collection: 'User Prescriptions'
});

module.exports = mongoose.model('Prescription', Prescription)