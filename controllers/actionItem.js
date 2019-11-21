const express = require('express');
const app = express();
app.use(express.static(__dirname + '/action-item-manager/build'));

const { actionItem } = require('../model/actionItem');

module.exports = app => {
    app.get('/action-item/test', (req, res) => {

    });
};
