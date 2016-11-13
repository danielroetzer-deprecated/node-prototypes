var http = require('http'),
    mysql = require('mysql'),
    util = require('util'),
    querystring = require('querystring');

var AddressBook = function () {
    this.connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        database : 'addressbook',
        password : ''
    });
    this.connection.connect();
    http.createServer(this.dispatcher.bind(this)).listen(8080, 'localhost');
};

AddressBook.prototype.dispatcher = function (request, response) {
    response.setHeader('Content-Type', 'application/json; charset=utf-8');

    var url = request.url.split('/');

    if (url[1] !== 'addresses') {
        this.error(response, 404, util.format('%s not found', url[1]));
        return false;
    }

    switch (request.method) {
        case 'GET':
            var id = url.length > 2 ? url[2] : null;
            this.getAddress(response, id);
            break;
        default:
            this.error(response, 405, 'Method not allowed');
    }
};

AddressBook.prototype.error = function (response, code, msg) {
    response.statusCode = code;
    response.end(util.format('{%s}', msg));
};