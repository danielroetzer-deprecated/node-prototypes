var wc = require('./WordCount.js');
var sentence = 'Wo viel Licht ist, ist auch viel Schatten.';
var wordCount = wc.wordCount(sentence);
console.log(sentence);
for (var i in wordCount) {
    console.log(wordCount[i] + ' x ' + i);
}