function* myGenerator() {
    var n = 100;
    while (true) {
        n = yield Math.floor(Math.random() * n);
    } }
var g = myGenerator();
console.log(g.next());
console.log(g.next(10));
console.log(g.next(1));