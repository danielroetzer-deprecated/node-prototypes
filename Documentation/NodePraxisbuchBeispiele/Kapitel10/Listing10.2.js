var template = '%platform% is a %language% runtime built on %engine% engine.';
var values = {
    platform: 'Node.js',
    language: 'JavaScript',
    engine: "Chrome's V8 JavaScript"
};
function compile(template, values) {
    var compiledTemplate = template;
    Object.keys(values)
        .forEach(function (value) {
            compiledTemplate = compiledTemplate.replace('%' + value + '%', values[value]);
        });
    return compiledTemplate.replace(/%.*%/g, '');
}
console.log(compile(template, values));