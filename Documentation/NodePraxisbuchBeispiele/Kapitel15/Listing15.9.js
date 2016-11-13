var readable = new require('stream').Readable({
    objectMode: true,
    read: function(n) {
        if (this.items++ < this.maxItems) {
            this.push({
                date: new Date(2015, 9, this.items + 1),
                temp: Math.floor(Math.random() * 1000 - 273) + '°C'
            });
        } else {
            this.push(null);
        } }
});
readable.items = 0;
readable.maxItems = 10;
