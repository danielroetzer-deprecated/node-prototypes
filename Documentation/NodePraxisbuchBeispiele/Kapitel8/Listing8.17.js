var http = require('http');
var url  = require('url');
var querystring = require('querystring');
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url);
    var path = urlObj.pathname.substr(1).split('/');
    var query = querystring.parse(urlObj.query);
    console.log(path);
    console.log(query);
    res.end();
}).listen(8080);