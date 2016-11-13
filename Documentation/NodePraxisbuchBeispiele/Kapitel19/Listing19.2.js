var assert = require('assert');

var myBuffer = new Buffer('Hello World');

var result = myBuffer.toString();

assert.equal(result, 'Hello World');
