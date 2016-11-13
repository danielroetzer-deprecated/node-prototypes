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
        case 'POST':
            this.newAddress(response, request);
            break;
        default:
            this.error(response, 405, 'Method not allowed');
    }
};

AddressBook.prototype.error = function (response, code, msg) {
    response.statusCode = code;
    response.end(util.format('{%s}', msg));
};

AddressBook.prototype.getAddress = function (response, id) {
    var query = 'SELECT * from `addresses`';
    if (id) {
        query += util.format(' WHERE `id` = "%s"', id);
    }
    this.connection.query(query, function (err, data) {
        if (err) {
            this.error(response, 500, err.code);
            return false;
        }
        var result = [];
        for (var i = 0; i < data.length; i += 1) {
            var temp = [];
            for (var j in data[i]) {
                if (typeof data[i][j] === 'function') { continue; }
                temp.push(util.format('"%s":"%s"', j, data[i][j]));
            }
            result.push(util.format('{%s}' ,temp.join(',')));
        }
        
        response.statusCode = 200;
        response.end('[' + result.join(',') + ']');
    }.bind(this));
};

AddressBook.prototype.newAddress = function (response, request) {
    request.on('data', function (data) {

        var values = querystring.parse(data.toString()),
            query = 'INSERT INTO `addresses` SET ?';

        this.connection.query(query, values, function (err, result) {
            if (err) {
                this.error(response, 500, err.code);
                return false;
            }

            var id = result.insertId;

            response.statusCode = 201;
            response.setHeader('Location', 'http://localhost:8080/addresses/'
                + id);

            values.id = id;
            var result = this.objToString([values]);
            response.end(result);
        }.bind(this));
    }.bind(this));
};

AddressBook.prototype.objToString = function (data) {
    var result = [];
    for (var i = 0; i < data.length; i += 1) {
        var temp = [];
        for (var j in data[i]) {
            if (typeof data[i][j] === 'function') { continue; }
            temp.push(util.format('"%s":"%s"', j, data[i][j]));
        }
        result.push(util.format('{%s}' ,temp.join(',')));
    }
    return '[' + result.join(',') + ']';
};

var myAddressBook = new AddressBook();
console.log('Service is running...');