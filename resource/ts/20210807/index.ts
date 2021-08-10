interface Student {
    name: string
    school: string
}

interface People {
    name: string
    age: number
}

const testName: Student & People = {
    name: '',
    school: '',
    age: 1
}

let b: Student | People = testName
console.log(b.name)

enum Days {
    Sun
}

let yuanzu: [string, number]

yuanzu[0] = 'string'

interface LoginInfo {
    time: Date
    info: string
    level?: "log" | "error" | "warning"
}

const obj1: LoginInfo = {
    time: new Date(),
    info: 'onb'
}

const obj2 = {}

const logInfo = true ? obj2 : obj1

console.log((logInfo as LoginInfo).info)

type LogLevel = "log" | "info" | "error"

function buildName(firstName: string = '默认值', lastName?: string) {}

function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item)
    })
}

interface MyPromise<T> {
    finally(onfinally?: (() => void) | undefined | null): MyPromise<T>
}

// async function demoPromise(): MyPromise<number> {
//     return 2
// }

function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(
            x.toString().split("").reverse().join("")
        )
    } else if(typeof x === 'string') {
        return x.split("").reverse().join("")
    }
}

// 一个接口允许有任意的属性 
interface Person {
    name: string
    [propName: string]: any
}

let tom: Person = {
    name: "Tom",
    gender: "male",
    ks: 1,
    1: 2
}

// 索引签名
interface Info {
    [propName: string]: number
}

interface Info2 {
    // x: string // 编译error：x不符合索引签名的定义
    [propName: string]: number
}

interface Prople2 {
    [name: string]: number | string | boolean
    [propName: number]: number
}


const LocalLogFile: {
    [level in LogLevel]?: string | void
} = {
    info: 'in'
}

interface MongoConf {
    host: string
    port: number
    db: string
}

export interface ProcessConf {
    pid: number
    mongodb: MongoConf
}