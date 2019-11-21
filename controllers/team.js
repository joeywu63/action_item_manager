const express = require('express');
const app = express();
app.use(express.static(__dirname + '/action-item-manager/build'));

const { Team } = require('../model/team');

module.exports = app => {
    app.get('/team/test', (req, res) => {

    });
};
