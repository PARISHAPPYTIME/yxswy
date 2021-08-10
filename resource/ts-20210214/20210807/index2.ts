interface ProName {
    readonly id: string
}

const proName: ProName = {
    id: 'string'
}

interface IArgument2 {
    [index: number]: number
    length: number
    callee: Function
}

function sum() {
    let args: IArguments = arguments
    console.log(args)
}

let mySum = function (x: number, y: number): number {
    return x + y
}

let mySun2: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y
}

interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1
}

class ApiError extends Error {
    code: number = 0
}

class HttpError extends Error {
    statusCode  = 200
}

function isApiError(error: Error) {
    // if (typeof (error as ApiError).code === 'number') {
    if (error instanceof ApiError) {
        return true
    }
    return false
}

function getCacheData(key: string): any {
    return (window as any).cache[key]
}

interface Cat {
    number: string
    name: string
    run(): void
}

const tom = getCacheData('tom') as Cat
tom.run()

interface Animal {
    name: string
}

let tom2: Cat = {
    name: 'Tom',
    number: '123',
    run: () => { console.log('run') }
}

let animal: Animal = tom2