var http = require('http');
function doRequest(url) {
    return new Promise(function (resolve, reject) {
        var options = {
            hostname: url,
            port: 80,
            method: 'GET'
        };
        var req = http.request(options, (res) => {
            res.setEncoding('utf8');
            var data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        });
        req.on('error', (e) => reject(e));
        req.end();
    });
}

doRequest('www.google.de')
    .then(function success (data) {
        console.log('data: ', data);
    }, function failure(err) {
        console.log('error: ', err);
    });

