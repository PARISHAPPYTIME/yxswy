function getString(value) {
    console.log(value)
    const str = String.prototype.toString.call(value)
    console.log(str, value)
}

getString('GitHub')

