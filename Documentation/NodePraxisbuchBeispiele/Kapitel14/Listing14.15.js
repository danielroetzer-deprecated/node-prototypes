function async(wait, success, value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            success ? resolve(value) : reject(value);
        }, wait); });
}
Promise.race([
    async(100, true, 'First'),
    async(50, true, 'Second'),
    async(75, true, 'Third')
]).then(
    function success(value) {
        console.log(value)
    }
);
