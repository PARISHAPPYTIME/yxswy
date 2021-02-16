// Generator函数的概念

function* gen(x){
    try {
        yield Promise.resolve(323)
        yield x + 7
    } catch (e) {
        console.log(e)
    }
}
const g = gen(1)
g.next().value.then(res => {
    console.log('这是返回的值' + res)
})
console.log(g.next())
// g.next()
// g.throw("出错了")
// console.log(g.next(2))
