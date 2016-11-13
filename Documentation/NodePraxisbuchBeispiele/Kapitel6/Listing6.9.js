var fs = require('fs');
function readFile(filename) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, 'utf-8', function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        }) });
}
readFile('input.txt').then(function success (data) {
    console.log('Content of the file: ', data);
}, function failure (error) {
    console.log('An error occured: ', error.message);
});