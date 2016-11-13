var fork = require('child_process').fork;

if (process.argv[2] && process.argv[2] === 'child') {
    process.on('message', function (data) {
        console.log('in child process: ' + data);
    });
} else {
    var child = fork(process.argv[1], ['child']);

    for (var i = 0; i < 10; i += 1) {
        child.send(i);
    }
}
