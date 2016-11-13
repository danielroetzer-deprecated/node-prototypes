var http = require('http'),
    url = require('url');
var reqUrl = {
    protocol: 'http',
    hostname: 'localhost',
    port: '8080',
    pathname: 'p/a/t/h',
    query: { query: 'string' }
};
http.request(url.format(reqUrl)).end();