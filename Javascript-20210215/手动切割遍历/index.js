function chunk (array, process, context) {
    setTimeout(function () {
        var item = array.shift();
        process.call(context, item);
        if (array.length > 0) {
            setTimeout(arguments.callee, 100);
        }
    }, 100);
}

let arr = Array.apply(null, new Array(4));
arr = arr.map((elem, index) => index);

chunk(arr, function(item) {
console.log(item)
console.log(this)
console.log(this.name)
}, { name: 123 })