var arrBuf = new ArrayBuffer(64);
var int32ArrView = new Int32Array(arrBuf);
for (var i = 0; i < int32ArrView.length; i++) {
    int32ArrView[i] = i;
}
console.log(int32ArrView);