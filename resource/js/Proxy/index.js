const origin = { name: 123 }
const origin2 = { name: 123 }

Object.defineProperty(origin, 'age', {
    configurable: false,
    enumerable: false,
    value: 10,
    writable: false
})

const obj = new Proxy(origin, {
    get (target, propKey, receiver) {
        console.log(target, propKey, receiver)
        return 10
    },
    has () {
        console.log(12)
    }
})

console.log(obj.age)

const { proxy, revoke } = Proxy.revocable(origin2, {
    get() {
        console.log(4444)
        return '123'
    }
})
proxy.name
revoke()

