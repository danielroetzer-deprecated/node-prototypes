var duplex = new require('stream').Duplex({
    read: function(n) {
        this.push(chunk);
    },
    write: function(chunk, encoding, next) {
        next();
    }
});
