var name = Symbol();
var myObj = {
    [name]: 'Klaus'
};
console.log(myObj[name]);
const APPLE = Symbol();
const BANANA = Symbol();
var fruit = APPLE;
switch (fruit) {
    case APPLE:
        console.log('an apple');
        break;
    case BANANA:
        console.log('a banana');
        break;
}