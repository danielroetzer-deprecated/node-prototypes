exports.getCategories = function (data) {
    var categories = [];
    for (var i = 0; i < data.length; i++) {
        categories[data[i].category.position] = data[i].category.name;
    }
    return categories.filter(function () {return true;});
};
