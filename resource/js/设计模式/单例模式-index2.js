// 通过传入新的构造函数得到新的生成单例对象的构造函数

var singleUser = function (fn) {
    var instance = null
    return function (args) {
        if (instance) return instance
        return instance = new fn(args)
    }
}

singleUser(function (name) {
    console.log(name)
})('888')
singleUser(function (name) {
    console.log(name)
})('222')