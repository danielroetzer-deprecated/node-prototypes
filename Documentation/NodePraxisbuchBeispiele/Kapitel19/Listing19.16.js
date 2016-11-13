exports.withoutGroup = function (test) {
    var buffer = new Buffer('Hello World');
    var result = buffer.toString();
    test.equals(result, 'Hello World');
    test.done();
};
exports.buffer = {
    setUp: function (callback) {
        this.buffer = new Buffer('Hello World');
        callback();
    },
    toString: function (test) {
        var result = this.buffer.toString();
        test.equals(result, 'Hello World');
        test.done();
    }
};
exports.path = {
    normalize: function (test) {
        var path = '/tmp/../etc/';
        var result = require('path').normalize(path);
        test.equals(result, '/etc/');
        test.done();
    }
};
