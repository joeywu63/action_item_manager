const express = require('express');
const app = express();
app.use(express.static(__dirname + '/action-item-manager/build'));

const { User } = require('../model/user');

module.exports = app => {
    app.get('/user/create', (req, res) => {
        const user = new User({
            name: 'test'
        });

        user.save().then(
            result => {
                res.send(result);
            },
            error => {
                res.status(400).send(error);
            }
        );
    });
};
