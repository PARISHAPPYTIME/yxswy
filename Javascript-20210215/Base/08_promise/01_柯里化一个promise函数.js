// 柯里化一个 promise 函数
const promisify = (func) => (...args) => {
	return new Promise((resolve, reject) => {
		func(...args, (err, result) => (err ? reject(err) : resolve(result)))
	})
}
const delay = promisify((d, cb) => setTimeout(cb, d))
delay(2000).then(() => console.log("Hi"))
