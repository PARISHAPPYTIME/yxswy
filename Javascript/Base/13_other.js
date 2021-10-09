// window.localStorage.setItem('id', '123456789');
// console.log(window.localStorage.getItem('id'));

const m = new Map()
m.set(1, "123123") // 设置
m.set('1', "1231232")
m.set('2', [45,8,5,9,6])
m.set('3', "1231232")
m.set('4', "1231232")

m.forEach((item, value, key) => {
	console.log(item, value, key)
})

m.get1(1) // 获取
console.log(m.has(1)) //判断时候含有该 key
