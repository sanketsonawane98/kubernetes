var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello From Group 20');
});

app.get('/will', function (req, res) {
    res.send('Hope you enjoy presentation');
    
});
app.get('/ready', function (req, res) {
    res.send('Thank You');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
