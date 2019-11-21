const mongoose = require('mongoose');

const ActionItem = mongoose.model('ActionItem', {
    name: {
    }
});

module.exports = { ActionItem };