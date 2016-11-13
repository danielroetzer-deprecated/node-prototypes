var fs = require('fs'),
    filename = 'config.ini';

fs.open(filename, 'r', function (err, handle) {
    fs.stat(filename, function (err, stats) {

        var size = stats.size,
            buffer = new Buffer(size);

        fs.read(handle, buffer, 0, size, 0, function (err, bytes, content) {
            var config = content.toString().split("\n");
            var result = {};
            var section = /^\s*\[\s*([^\]]*)\s*\]\s*$/;
            var currentSection = 'default';
            var tempSection;
            var keyVal;
            var key;
            var value;

            for (var i = 0; i < config.length; i += 1) {

                tempSection = config[i].match(section);

                if (tempSection !== null) {
                    currentSection = tempSection[1];
                    result[currentSection] = {};
                } else if (config[i].trim() !== '') {
                    keyVal = config[i].split('=');
                    key = filterString(keyVal[0]);
                    value = filterString(keyVal[1]);
                    result[currentSection][key] = value;
                }
            }

            fs.close(handle);
            console.log(result);

        });
    });
});

var filterString = function(input) {
    var output = input.trim();
    output = output.replace(/"/g, '');
    return output;
};
