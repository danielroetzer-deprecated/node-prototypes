function async(wait, success, value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            success ? resolve(value) : reject(value);
        }, wait); });
}
Promise.all([
    async(100, true, 'World'),
    async(50, true, 'Hello')
]).then(
    function success(values) {
        console.log(values.join(' '));
    }
);
