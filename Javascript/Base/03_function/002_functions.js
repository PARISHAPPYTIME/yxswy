function functions(object) {
    if (object == null) {
        return []
    }
    return Object.keys(object).filter((key) => typeof object[key] === 'function')
}

// export default functions
// test --
function Foo() {
    this.a = () => 'a'
    this.b = () => 'b'
    this.c = 123
    this.v = 0
}
Foo.prototype.c = () => 'c'
console.log(functions(new Foo))