var cluster = require('cluster'),
    http = require('http');

if (cluster.isMaster) {
    cluster.fork();
    cluster.fork();

    cluster.on('listening', function (worker) {
        console.log('Worker ' + worker.id + ' ready and listening');
        setTimeout(function () {
            worker.send('Hello Worker');
        }, 2000);
    });

    for (var i in cluster.workers) {
        cluster.workers[i].on('message', function (i, msg) {
            console.log('Worker ' + i + ' said: ' + msg);
        }.bind(this, i));
    }

} else {
    http.createServer(function (req, res) {
        res.end('Hello Client');
    }).listen('8080');

    cluster.worker.on('message', function (msg) {
        console.log('Master said to Worker ' + cluster.worker.id + ': ' + msg);
    });

    cluster.worker.send('Hello Master');
}
