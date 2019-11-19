/* Student mongoose model */
const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minlegth: 1,
        trim: true
    }
});

module.exports = { User };
