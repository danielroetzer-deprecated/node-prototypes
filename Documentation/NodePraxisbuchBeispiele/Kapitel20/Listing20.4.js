require('http').createServer(function (req, res) {
    var number = require('url').parse(req.url, true).query.number,
        result = 1,
        start = new Date().getTime();

    if (number !== undefined) {
        for (var i = 1; i <= number; i++) {
            result += i * i;
        }
    }

    var end = new Date().getTime();
    res.end('Time :' + (end - start) + ' Result: ' + result);
}).listen(8080);
