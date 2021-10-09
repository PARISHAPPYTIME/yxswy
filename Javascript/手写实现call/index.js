// 原理是对象里面的函数的 this 指向该对象

Function.prototype.MyCall = function(context) {
    console.log(this, context)
    if (typeof this !== 'function') {
        throw new TypeError("Error")
    }

    context = context || window

    const { fn } = context
    console.log('fn', fn)

    context.fn = this
    const args = [...arguments].slice(1)
    console.log('args', args)
    const result = context.fn(...args)

    console.log('fn', fn)
    context.fn = fn
    return result
}

function test(arg1, arg2) {
    console.log(arg1, arg2)
    console.log(this.a, this.b)
    console.log(this) // undefined
}

test.hol = 123

const t = test.MyCall({
    a: 'a',
    b: 'b'
}, 1, 2)

console.log(t)