var express = require('express');
var app = express();

// var startups = ...

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/startups/', function (req, res) {
    res.send([1, 2, 3]);
})

app.get('/startups/:id/:name', function (req, res) {
    res.send(req.params);