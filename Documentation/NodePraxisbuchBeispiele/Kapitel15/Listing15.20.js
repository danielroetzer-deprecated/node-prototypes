"use strict";
var fs = require('fs');
var read = fs.createReadStream('input.txt');
var write = fs.createWriteStream('transform.txt');

var Transform = require('stream').Transform;

class ToUpperCase extends Transform {
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
}

var toUpperCase = new ToUpperCase();
read.pipe(toUpperCase)
    .pipe(write);
