var http = require('http');
var cheerio = require('cheerio');
var request = http.get('http://www.wetter.com');
request.on('response', function (response) {
    var body = '';
    response.on('readable', function () {
        body += response.read();
    });
    response.on('end', function () {
        $ = cheerio.load(body);
        console.log($('h1').html());
    });
});