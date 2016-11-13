var spawn = require('child_process').spawn,
    find = spawn('find', ['.', '-iname', 'node'], {'cwd': '/usr/local'});
find.stdout.on('data', function (data) {
    console.log(data.toString());
});
