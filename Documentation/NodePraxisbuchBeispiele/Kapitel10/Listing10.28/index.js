var http = require('http');
var fs = require('fs');
var hbs = require('handlebars');

http.createServer(function (req, res) {
    fs.readFile('templates/index.hbs', 'utf-8', function (err, data) {
        var template = hbs.compile(data);
        var result = template({name: 'Handlebars'});
        res.end(result);
    });
}).listen(8080);