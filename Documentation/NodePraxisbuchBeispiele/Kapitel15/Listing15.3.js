var fs = require('fs');

var options = {
    encoding: 'utf8'
};

var readStream = fs.createReadStream('input.txt', options);

readStream.on('readable', function () {
    console.log(readStream.read());
});
readStream.on('close', function () {
    console.log('Der Stream wurde geschlossen');
});
