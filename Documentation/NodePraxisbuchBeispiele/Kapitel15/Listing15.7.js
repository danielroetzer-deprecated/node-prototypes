'use strict';

var Readable = require('stream').Readable;

class TemperatureReader extends Readable {
    constructor(opt) {
        opt = opt || {};
        opt.objectMode = true;
        super(opt);
        this.items = 0;
        this.maxItems = 10;
    }
    _read() {
        if (this.items++ < this.maxItems) {
            this.push({
                date: new Date(2015, 9, this.items + 1),
                temp: Math.floor(Math.random() * 1000 - 273) + '°C'
            });
        } else {
            this.push(null);
        }
    }
}

var tr = new TemperatureReader();
var tempObj;
tr.on('readable', function() {
    while (null !== (tempObj = tr.read())) {
        console.log(JSON.stringify(tempObj));
    } });
