// new Proxy
let m = new Proxy({}, {
	get(target, propKey, receiver){
		console.log(target, propKey, receiver)
		return Reflect.get(target, propKey, receiver)
	},
	set(target, propKey, value, receiver){
		console.log(target, propKey, value, receiver)
        // 强制控制值
		return Reflect.set(target, propKey, 'value', receiver)
	}
})
console.log(m)
m.name = 8
console.log(m.name)
