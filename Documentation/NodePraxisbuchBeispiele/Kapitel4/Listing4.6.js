var emitter = new (require('events').EventEmitter)();
var callback = function () {
    console.log('Once ping event');
};
emitter.once('ping', callback);
emitter.on('ping', function() {console.log('On ping event');});
console.log(emitter.listeners('ping'));
emitter.removeListener('ping', callback);
console.log(emitter.listeners('ping'));