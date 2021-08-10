const obj = {
    name: '2'
}

const objProxy = new Proxy(obj, {
    get(target, key, receiver) {
        console.log(target, key, receiver)
        console.log(Reflect.has(target, key), '--')
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        console.log(target, key, value, receiver)
        return Reflect.set(target, key, value, receiver)
    }
})

console.log(objProxy)
objProxy.name = '8'
objProxy.name