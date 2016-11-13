var https = require('https');
var fs = require('fs');
var options = {
    key: fs.readFileSync(__dirname + '/key.pem'),
    cert: fs.readFileSync(__dirname + '/cert.pem')
};
https.createServer(options, function (req, res) {
    res.end("Response from secure server");
}).listen(8080);