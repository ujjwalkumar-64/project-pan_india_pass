const mongoose = require('mongoose');

const contactschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    artistName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const contact = mongoose.model('contact', contactschema);

module.exports = contact;
