'use strict';
var EventEmitter = require('events').EventEmitter;
class MsgBus extends EventEmitter {
    constructor() {
        super();
        this.events = ['create', 'read', 'update', 'delete'];
    }
    on(event, listener) {
        if (this.events.indexOf(event) === -1) {
            throw new Error('Invalid event');
        }
        super.on(event, listener);
    }
}

var msgBus = new MsgBus();
msgBus.on('create', console.log);
msgBus.emit('create', 'Hello World');