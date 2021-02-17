// 我们需要一个可以生成用户的构造函数，
// 这个用户的实例可能是普通用户、商户、管理员。
// 每种角色都有对应权限，只可访问有权限的页面。

function createUser(type) {
    function User(option) {
        this.name = option.name
        this.viewPage = option.viewPage
    }
    switch (type) {
        case "user":
            return new User({ name: "user", viewPage: ["主页", "设置页"] })
            break;
        case "merchant":
            return new User({ name: "merchant", viewPage: ["主页", "设置页", "XXX页"] })
            break;
        case "admin":
            return new User({ name: "admin", viewPage: ["主页", "设置页", "XXX页", "XXXX页"] })
            break;
        default:
            throw new Error("参数错误")
            break;
    }
}
console.log(createUser("user"));