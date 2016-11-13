'use strict';
class Person {
    constructor() {
        this.persons = [
            'Gamma', 'Helm', 'Johnson', 'Vlissides'
        ];
    }
    getPersons() {
        return this.persons;
    }
}
module.exports = Person;