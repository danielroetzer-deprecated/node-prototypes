var http = require('http');

var sources = {},
    timeThreshold = 10000,
    countLimit = 10;

http.createServer(function (req, res) {
    var client = req.connection.remoteAddress,
        now = new Date().getTime();

    if (sources[client]) {
        if (now - sources[client].time < timeThreshold && sources[client].count > countLimit) {
            res.statusCode = 400;
            res.end('Bad Request');
            return false;
        } else if (now - sources[client].time > timeThreshold) {
            sources[client] = {time: now, count: 1};
        } else {
            sources[client].count += 1;
        }
    } else {
        sources[client] = {time: now, count: 1};
    }

    res.end('Hello Client');
}).listen(8080);
