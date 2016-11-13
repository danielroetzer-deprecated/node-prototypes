var fs = require('fs');
var writeStream = fs.createWriteStream('output.txt');

var data = 'Node.js is great';

var i = 1000000;
write();
function write() {
    var ok = true;
    do {
        i -= 1;
        if (i === 0) {
            writeStream.end(data);
        } else {
            ok = writeStream.write(data);
        }
    } while (i > 0 && ok);
    if (i > 0) {
        console.log('wait');
        writeStream.once('drain', write);
    }
}
