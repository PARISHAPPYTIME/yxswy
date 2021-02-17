// 单例模式可以确保一个特定的类最多只能存在一个实例，
// 这意味着你第二次使用相同的类创建实例对象时，
// 应该得到和第一次创建相同的对象，它的实现原理往往是通过闭包。

// 全局只需要唯一对象的，例如、弹窗、遮罩。包括ES6模块化和CommonJS模块化导出的对象也是唯一对象。
const Name = '2'
var singleUser = (function () {
    function User(name) {
        this.name = name;
    }
    var instance = null
    if (instance) return instance
    return instance = new User(Name)
})();
