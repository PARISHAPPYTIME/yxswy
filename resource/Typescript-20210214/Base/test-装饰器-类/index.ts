// 装饰器
// 普通装饰器，不能传参
function get(params:any) {
    console.log(params)
    params.prototype.apiUrl = 'xxx'
}

@get
class HttpClient {
    constructor() {

    }
    getData() {

    }
}

const http = new HttpClient()
console.log(http)

function newGet(params:string) {
    return function(target:any) {
        console.log(target, params)
    }
}

@newGet('hello')
class HttpClient2 {
    constructor() {

    }
    getData() {

    }
}
const http2 = new HttpClient2()
console.log(http2)


function test(n1:number) {
    console.log('生命2')
    return function(n2:number) {
        return function(n3:number) {
            return function(target:any) {
                console.log(n1, n2, n3, target)
            }
        }
    }
}

@test(1)(2)(3)
class MyName {
    constructor(name:string) {
        console.log('生命一')
    }
}

const myName = new MyName('ee')


function test2(target:any) {
    return class newMyName2 extends target {
        apiUrl:any = '我是修改后的户手机v'
        getData() {

        }
    }
}

@test2
class MyName2 {
    public apiUrl:string | undefined
    constructor(name:string) {
        this.apiUrl = name
    }
}

const myName2 = new MyName2('ee')
console.log(myName2)