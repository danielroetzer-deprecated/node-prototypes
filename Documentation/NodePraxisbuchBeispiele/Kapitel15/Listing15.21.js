var transform = new require('stream').Transform({
    transform: function (chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});
