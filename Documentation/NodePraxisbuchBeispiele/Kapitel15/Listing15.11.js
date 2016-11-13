var fs = require('fs');

var readable = fs.createReadStream('input.txt');
var writable = fs.createWriteStream('output.txt');

writable.on('pipe', function (readstream) {
    console.log('pipe handler called');
});

writable.on('unpipe', function (readstream) {
    console.log('unpipe handler called');
});

writable.on('finish', function () {
    console.log('finish handler called');
});

readable.pipe(writable);
