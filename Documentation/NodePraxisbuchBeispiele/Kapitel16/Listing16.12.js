var fs = require('fs'),
    file = 'error.log';
var watcher = fs.watch('error.log', function (event) {
    console.log(file + ' has been ' + event + 'd');
    watcher.close();
});
