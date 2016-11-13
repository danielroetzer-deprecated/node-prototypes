exports.testBufferToString = function (test) {
    var myBuffer = new Buffer('Hello World');

    var result = myBuffer.toString();

    test.equal(result, 'Hello World');

    test.done();
};
