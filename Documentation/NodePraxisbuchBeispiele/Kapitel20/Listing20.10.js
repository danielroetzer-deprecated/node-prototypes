require('http').createServer(function (req, res) {
    var headers = {
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains', 'X-Frame-Options': 'SAMEORIGIN',
        'X-XSS-Protection': '1',
        'X-Content-Type-Options': 'nosniff',
        'Content-Security-Policy': 'default-src "self"',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate', 'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
    };
    res.writeHead(200, headers);
    res.end('Hello Client');
}).listen(8080);
