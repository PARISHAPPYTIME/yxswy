function isString(test: any): test is string {
    return typeof test === 'string'
}

function example(foo: any) {
    if (isString(foo)) {
        console.log('it is a string' + foo)
        console.log(foo.length) // string function
        // 如下代码编译时会出错，运行时也会出错，因为 foo 是 string 不存在toExponential方法
        // console.log(foo.toExponential(2))
    }
    // 编译不会出错，但是运行时出错
    console.log(foo.toExponential(2))
}
example('hello world')

interface ReactiveEffect {
    _isEffect: true
}

function isEffect(fn: any): fn is ReactiveEffect {
    return fn && fn._isEffect === true
}