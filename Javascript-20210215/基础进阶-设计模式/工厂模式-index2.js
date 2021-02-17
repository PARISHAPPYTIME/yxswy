function createUser(role) {
    return new createUser.prototype[role]()
}
createUser.prototype.user = function () {
    this.name = "user";
    this.viewPage = ["主页", "设置页"];
}
createUser.prototype.admin = function () {
    this.name = "merchant";
    this.viewPage = ["主页", "设置页", "XXX页"];
}
createUser.prototype.merchant = function () {
    this.name = "merchant";
    this.viewPage = ["主页", "设置页", "XXX页", "XXXX页"];
}
