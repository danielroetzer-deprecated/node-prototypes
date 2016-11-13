var spawn = require('child_process').spawn,
    find = spawn('find', ['.', '-iname', 'node'], {'cwd': '/usr/local'}),
    grep = spawn('grep', ['bin']);

find.stdout.on('data', function (data) {
    grep.stdin.write(data);
});

find.on('exit', function (code) {
    grep.stdin.end();
});

grep.stdout.on('data', function (data) {
    console.log('' + data);
});
