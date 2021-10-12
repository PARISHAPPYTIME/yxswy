// 参考地址 https://segmentfault.com/a/1190000018113011

const arr = [2, 3, 4, 5, 6]
let max

max = Reflect.apply(Math.max, null, arr)
console.log(max)

max = Math.max.apply(null, arr)
console.log(max)

max = Function.prototype.apply.call(Math.max, null, arr)
console.log(max)

// 需要注册抽象
declare class A {
    constructor(message: string);
    name: string
    getName: () => void
}

function A(this: any) {
    console.log('Function A is invoked!')
    this.name = name
}
A.prototype.getName = function () {
    return this.name
}

function B(this: any, age: number) {
    console.log('Function B is invoked!')
    this.age = age
}
B.prototype.getAge = function () {
    return this.age
}

let tom = new A('tom')
let tom2 = Reflect.construct(A, ['tom'])
console.log(tom2)
let tom3 = Reflect.construct(A, ['tom'], B)
console.log(tom3)

let obj = {}
let obj1 = Object.defineProperty(obj, 'name', {
    enumerable: true,
    value: 'zhansan'
})
let result1 = Reflect.defineProperty(obj, 'name', {
    configurable: true,
    enumerable: true,
    value: 'happy'
})
console.log(result1)

let opq = {
    name: 'dreamapple',
    age: 22
}
let r1 = Reflect.deleteProperty(opq, 'name');
console.log(r1); // true
let r2 = Reflect.deleteProperty(opq, 'name');
console.log(r2); // true
let r3 = Reflect.deleteProperty(Object.freeze(opq), 'age');
console.log(r3); // false