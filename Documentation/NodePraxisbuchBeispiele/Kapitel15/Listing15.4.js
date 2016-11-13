var fs = require('fs');
var options = {
    encoding: 'utf8'
};
var readStream = fs.createReadStream('gibtEsNicht.txt', options);

readStream.on('error', function (err) {
    console.log('Es ist ein Fehler aufgetreten');
    console.log(err);
});
