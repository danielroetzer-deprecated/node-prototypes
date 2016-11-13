
var fs = require('fs');
var filename = 'config.ini';
fs.readFile(filename, 'utf8', function (err, content) {
    var config = content.split('\n');
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

    console.log(result);
});

var filterString = function(input) {
    var output = input.trim();
    output = output.replace(/"/g, '');
    return output;
};
