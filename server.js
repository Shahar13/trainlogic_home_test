var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.listen('8899')
console.log('Listening at port 8899')
exports = module.exports = app;
