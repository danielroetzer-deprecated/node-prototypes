var http = require('http');
var jade = require('jade');

var fn = jade.compileFile('templates/compile.jade');
http.createServer(function (req, res) {
    var output = fn({name: 'World'});
    output += fn({name: 'Node.js'});

    res.end(output);

}).listen(8080);