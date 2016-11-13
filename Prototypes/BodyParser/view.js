module.exports = function (persons) {
    return view `Name: ${persons}`;
};
function view(string, value) {
    return value
            .map((name) => string[0] + name)
            .join('<br />');
};