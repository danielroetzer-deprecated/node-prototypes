'use strict';
class Group {
    constructor() {
        this.members = ['Peter', 'Paul', 'Mary'];
    }
    getMembersStartingWithP() {
        return this.members.filter((member) => member.startsWith('P'));
    } }
var group = new Group();
console.log(group.getMembersStartingWithP());
