var childProcess = require('child_process');

var child1 = childProcess.fork('logic1.js'),
    child2 = childProcess.fork('logic2.js');

var count = 0;

function handleResults() {
    // wird nach child1 und child2 ausgeführt
}

child1.on('message', function (data) {
    count +=1;

    // logic to handle child1 result

    if (count >= 2) {
        // handle final results
        handleResults();
    }
});

child2.on('message', function (data) {
    count +=1;

    // logic to handle child2 result

    if (count >= 2) {
        // handle final results
        handleResults();
    }
});
