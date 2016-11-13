var ignore = /[\.,]/g;
var separator = " ";
var wordCount = function (sentence) {
    var wordCount = {};
    var words = sentence.replace(ignore, '')
        .toLowerCase().split(separator);
    for (var i in words) {
        wordCount[words[i]] = wordCount[words[i]] + 1 || 1;
    }
    return wordCount;
};
exports.wordCount = wordCount;