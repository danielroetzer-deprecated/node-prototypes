function linkbuilder(string, url, title) {
    var encUrl = encodeURI(url);
    var cutTitle = title;
    if (title.length && title.length > 3) {
        cutTitle = `${title.substr(0, 3)}...`;
    }
    return string[0]
        + encUrl
        + string[1].replace('>', ` title="${title}">`)
        + cutTitle
        + string[2];
}
var url = 'https://www.google.de#q=Node.js';
var title = 'Node.js';
console.log(linkbuilder `<a href="${url}">${title}</a>`);