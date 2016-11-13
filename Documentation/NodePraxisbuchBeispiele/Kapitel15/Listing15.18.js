'use strict';

var Duplex = require('stream').Duplex;

class MyDuplex extends Duplex {
    _read(n) {
        this.push(chunk);
    }

    _write(chunk, encoding, done) {
        done();
    }
}

var myDuplex = new MyDuplex();
