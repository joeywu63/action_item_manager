const mongoose = require('mongoose');

const Team = mongoose.model('Team', {
    name: {
    }
});

module.exports = { Team };
