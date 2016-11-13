'use strict';
class Square {
    constructor (sideLength) {
        this.length = sideLength;
    }
    getArea() {
        return this.length * this.length;
    }
    get sideLength () {
        return this.length;
    }
    set sideLength (sideLength) {
        this.length = sideLength;
    }
    static getSquare (sideLength) {
        return new Square(sideLength);
    } }
let square1 = new Square(4);
let square2 = Square.getSquare(5);

console.log(square1, square2);