var child_process = require('child_process');

if (process.argv[2] === 'child') {
    var number = process.argv[3],
        result = 1,
        start = new Date().getTime();

    if (number !== undefined) {
        for (var i = 1; i <= number; i++) {
            result += i * i;
        }
    }

    var end = new Date().getTime();

    process.send({time: end - start, result: result});
} else {
    require('http').createServer(function (req, res) {

        var number = require('url').parse(req.url, true).query.number;

        if (number < 0 || number > 1000) {
            res.end('Please provide a number between 0 and 1000');
        }

        var child = child_process.fork(__filename, ['child', number]);

        child.on('message', function (data) {
            res.end('Time: ' + data.time + ' Result: ' + data.result);
        });
    }).listen(8080);
}
