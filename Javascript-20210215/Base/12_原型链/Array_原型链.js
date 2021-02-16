function getArr() {
    console.log(arguments)
    const arr = Array.prototype.slice.call(arguments, 0)
    console.log(arr, arguments)
}

getArr("1", 5, 85)