var path = require('path');
var express = require('express');
app = express();
var path = require('path');
var bodyParser = require('body-parser');

var port = process.env.PORT || 4200;
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static('build'));
app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/build/index.html');
});
app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.use(express.static(path.join(__dirname, 'build/index.html')));

// start the server 
app.listen(port, '0.0.0.0');

console.log('http://localhost:' + port);


 

