var writable = new require('stream').Writable({
    write: function(chunk, encoding, done) {
        done();
    }
});
