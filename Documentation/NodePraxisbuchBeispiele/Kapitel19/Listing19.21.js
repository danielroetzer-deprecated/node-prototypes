var product = require('../src/product.js');

exports.testGetCategoriesFromJSON = function (test) {
    var input = [{
        "id": "800001",
        "name": "Papier A4",
        "category": {"id": 1, "name": "Papier", "position": "3"}
    }, {
        "id": "90273",
        "name": "Kugelschreiber",
        "category": {"id": 3, "name": "Schreibmaterial", "position": "1"}
    }];
    var output = product.getCategories(input);

    test.deepEqual(output, ['Schreibmaterial', 'Papier']);
    test.done();
};

exports.testGetFurtherCategoriesFromJSON = function (test) {
    var input = [{
        "id": "600320",
        "name": "Radiergummi",
        "category": {"id": 1, "name": "Zubehör", "position": "4"}
    }, {
        "id": "90273",
        "name": "Kugelschreiber",
        "category": {"id": 3, "name": "Schreibmaterial", "position": "1"}
    }];
    var output = product.getCategories(input);
    test.deepEqual(output, ['Schreibmaterial', 'Zubehör']);
    test.done();
};
