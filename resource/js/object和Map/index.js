const obj = {}
Map.prototype[123] = 456
const map = new Map()

console.log(map[123])
map[123] = 123
console.log(map[123])
map.set(123, 123)
map.set(123, 456)
console.log(map[Symbol.iterator])
console.log(obj[Symbol.iterator])

console.log(map)


const o = {}
const obj =Object.create({ toNumber: (n) => parseInt(n) }) // 创建在原型链上

obj.age = '123456789'
console.log(obj.toNumber('789'), obj.age)

console.log(o)
console.log(obj)