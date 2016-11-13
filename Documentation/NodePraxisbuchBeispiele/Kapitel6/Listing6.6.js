var map = new Map();
var func = function () {};
var obj = {};
var str = 'String';
map.set(func, 'Function Value');
map.set(obj, 'Object Value');
map.set(str, 'String Value');
console.log(`Size of the Map: ${map.size}`);
for (var entry of map) {
    console.log(`Key: ${entry[0]} Value: ${entry[1]}`); 6
}