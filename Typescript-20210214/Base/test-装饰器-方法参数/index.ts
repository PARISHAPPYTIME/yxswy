// 方法参数装饰器

function functionMethod2(params:any) {
    return function(target:any, methodName:any, paramsIndex:any) {
        console.log(params, target, methodName, paramsIndex)
        console.log(target[methodName])
    }
}

class FunctionMyName2 {
    public name:any | undefined
    constructor() {
        // this.name = name
    }
    getName(
        @functionMethod2('uuid') uuid:any,
        @functionMethod2('uuid2') uuid2:any
    ) {
        console.log(uuid, uuid2)
        return this.name
    }
}
const funMyName2 = new FunctionMyName2()
funMyName2.getName(2222, 8)