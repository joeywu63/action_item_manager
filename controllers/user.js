const express = require('express');
const app = express();
app.use(express.static(__dirname + '/action-item-manager/build'));

const { User } = require('../model/user');

module.exports = app => {
    app.post('/user/login', (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        User.findByEmailPassword(email, password)
            .then(user => {
                if (!user) {
                    res.status(400).redirect('/');
                } else {
                    req.session.user = user._id;
                    res.redirect('/action-items');
                }
            })
            .catch(error => {
                res.status(400).redirect('/');
            });
    });

    app.get('/user/logout', (req, res) => {
        req.session.destroy(error => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.redirect('/login');
            }
        });
    });

    app.post('/user/create', (req, res) => {
        const { email, firstName, lastName, password } = req.body;
        const user = new User({
            email,
            firstName,
            lastName,
            password,
            teamIDList: [],
            role: 0
        });

        user.save().then(
            result => {
                req.session.user = result._id;
                res.redirect('/action-items');
            },
            error => {
                res.status(400).send(error);
            }
        );
    });
};
