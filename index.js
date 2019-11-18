'use strict';

const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static(__dirname + '/action-item-manager/build'));

app.use(express.static(__dirname + '/action-item-manager/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/action-item-manager/build/index.html'));
});

app.get('/test', (req, res) => {
    res.send('test');
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
