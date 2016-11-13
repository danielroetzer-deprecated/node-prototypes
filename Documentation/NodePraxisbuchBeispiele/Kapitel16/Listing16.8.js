'use strict';
var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var util = require('util');
class EventLogger extends EventEmitter {
    constructor (file, levels) {
        super();
        this.file = file;
        this.levels = levels;
        this.on('error', this.log.bind(this, 'ERR'));
        this.on('warning', this.log.bind(this, 'WARN'));
        this.on('info', this.log.bind(this, 'INFO'));
    }
    log(level, data) {
        if (this.levels.indexOf(level) > -1) {
            fs.open(this.file, 'a', function (err, handle) {
                var buffer = new Buffer(util.format('%s (%s) %s\n', new Date(), level, data));
                fs.write(handle, buffer, 0, buffer.length, null, function (err, written, buffer) {});
            });
        }
    }
}

var logger = new EventLogger('error.log', ['ERR', 'WARN']);
logger.emit('error', 'Something happened');
logger.emit('warning', 'Something else happened');
logger.emit('info', 'Not relevant');
