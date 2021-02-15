// 方法装饰器

function functionMethod(params:any) {
    return function(target:any, methodName:any, desc:any) {
        console.log(desc.value)
        // 修改装饰器的方法
        const oMethod = desc.value
        desc.value = function(...args:any[]) {
            args = args.map((value) => {
                return String(value)
            })
            console.log(args)
            oMethod.apply(this, args)
        }
    }
}

class FunctionMyName {
    public name:any | undefined
    constructor() {
        // this.name = name
    }
    @functionMethod('http://www.baidu.com')
    getName(...args:any[]) {
        console.log(args)
        return this.name
    }
}
const funMyName = new FunctionMyName()
funMyName.getName(2, 8, '33')

