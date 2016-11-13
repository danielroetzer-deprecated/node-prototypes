var myObj = {
    values: ['Apple', 'Banana', 'Pineapple'],
    [Symbol.iterator]() {
        var i = 0;
        return {
                next: () => {
                console.log('Iteration ', i + 1);
        if (i < this.values.length) {
            i++;
            return {value: this.values[i]};
        } else {
            return {done: true}
        }
    } }
    } };
for (var i of myObj) {
    console.log(i);
}