var http = require('http');
var fs = require('fs');
var hbs = require('handlebars');

http.createServer(function (req, res) {
    hbs.registerHelper('uc', function (data) {
        return data.toUpperCase();
    });

    fs.readFile('templates/index.hbs', 'utf-8', function (err, data) {
        var template = hbs.compile(data);
        var result = template();
        res.end(result);
    });
}).listen(8080);