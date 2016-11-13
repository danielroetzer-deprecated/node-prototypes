'use strict';
class Person {
    constructor() {
        this.persons = [
            'Gamma', 'Helm', 'Johnson', 'Vlissides'
        ]; }
    getPersons() {
        return this.persons;
    }
    addPerson(name) {
        this.persons.push(name);
    }
}
module.exports = Person;