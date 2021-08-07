function logProperty(params:any) {
    return function(target:any, attr:any) {
        console.log(params, target, attr)
        target[attr] = params
        // 修改属性的值
    }
}
class ObjMyName {
    @logProperty('http://www.baidu.com')
    public name:any | undefined
    constructor() {
        // this.name = name
    }
    getName() {
        console.log(this.name)
        return this.name
    }
}
const objMyName = new ObjMyName()
objMyName.getName()