'use strict';

const { mongoose } = require('./db/mongoose');

const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        secret: 'oursecret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60000,
            httpOnly: true
        }
    })
);

const sessionChecker = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
};

const loginChecker = (req, res, next) => {
    if (req.session.user) {
        res.redirect('/action-items');
    } else {
        next();
    }
};

// Load controllers
require('./controllers/user')(app);
require('./controllers/team')(app);
require('./controllers/actionItem')(app);

app.get('/', (req, res) => {res.redirect('/login');});

app.use(express.static(__dirname + '/action-item-manager/build'));
app.use(express.static(__dirname + '/login-page/build'));

app.get('/login', loginChecker, (req, res) => {
    res.sendFile(path.join(__dirname + '/login-page/build/index.html'));
});

app.get('*', sessionChecker, (req, res) => {
    res.sendFile(
        path.join(__dirname + '/action-item-manager/build/index.html')
    );
});

// Error codes
// app.get('/problem', (req, res) => {
// You can indicate a status code to send back
// by default it is 200, but it's up to you
// if you want to send something
// res.status(500).send('There was a problem on the server');

// don't send nonsense status codes like this one:
//res.status(867).send('There was a problem on the server')
// });

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
}); // localhost development port 3001  (http://localhost:3001)
