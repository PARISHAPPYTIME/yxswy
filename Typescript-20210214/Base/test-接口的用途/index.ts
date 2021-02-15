// 接口： 行为和动作的规范，对批量方法进行约束

// 传入对象的约束
interface FullName {
    firstName: string
    secondName: string
    data?: object
}

function printName(name: FullName) {
    console.log(name.firstName, name.secondName)
}

const obj = {
    firstName: '2',
    secondName: '3',
    age: 23
}
printName(obj)


interface encrypt {
    (key: string, value: string): string
}

const md5:encrypt = function(key:string, value: string): string {
    return key + value
}

const md53:encrypt = function(key, value) { // 这样子也是可以被限制
    return key + value
}

const arr:number[] = [123, 45678, 78]

interface UserArr { // 对数组的约束
    [index:number]:string
}

const arrN2:UserArr = ["str", "jjo"]

interface UserObj {
    [index:string]: string
}
const objN2:UserObj = { // 对对象的约束
    name: '789'
}

interface UserClass {
    name: string
    eat(str:string): void
}

interface Person extends UserClass {
    work(flag: boolean): string
}

class Dog {
    public name: string
    constructor(name: string) {
        this.name = name
    }
    codding(code: string) {
        console.log(this.name + '学到')
    }
}

class Person extends Dog implements UserClass {

    constructor(name: string) {
        super(name)
    }
    eat(str: string): void{
        console.log(this.name)
    }
    work(flag: boolean): string {
        return '2'
    }
}

const dog = new Person("小黑")

function getData<T>(value: T): T {
    return value
}
getData<number>(4123)

class MinClass<T> {
    public list:T[] = []
    add(value:T):void {
        this.list.push(value)
    }
    min():T {
        var minNum = this.list[0]
        for(var i = 0; i < this.list.length; i ++) {
            if(minNum > this.list[i]) {
                minNum = this.list[i]
            }
        }
        return minNum
    }
}

const m1 = new MinClass<number>()
m1.add(2)
m1.add(3)
m1.add(4)

const m2 = new MinClass<string>()
m2.add('2')
m2.add('3')
m2.add('a')

interface ConfigFn {
    (value1: string, value2: string):string
}

const setData:ConfigFn = function(val1:string, val2:string):string {
    return val1 + val2
}

setData('name', '颤三')

// interface ConfigFn2 { // try1
//     <T>(value1: T):T
// }
// const setData2:ConfigFn2 = function<T>(value:T):T {
//     return value
// }
// setData2<string>('2')

interface ConfigFn2<T> {
    (value1: T):T
}
function getData2<T>(value:T):T { // try2
    return value
}
const newGetData2:ConfigFn2<string> = getData2

class User {
    username:string | undefined
    password:string | undefined
}

// class MySqlDb {
//     add(user: User): boolean {
//         return true
//     }
// }

class MySqlDb<T> {
    add(info: T): boolean {
        return true
    }
}

class ArticleCate {
    title:string | undefined
    desc:string | undefined
    status:number | undefined
}

const u = new User()
u.username = '2'
u.password = '789'

const db = new MySqlDb<User>()
db.add(u)
