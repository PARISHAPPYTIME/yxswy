// 方法从从右往左执行 a -> b
const compose = (...fns) => {
	return (val) => {
		return fns.reduceRight((total, fn) => {
			return fn(total)
		}, val)
	}
}
compose(b, a)()

// 方法从从右往左执行 b -> a
const compose = (...fns) => {
	return (val) => {
		return fns.reduce((total, fn) => {
			return fn(total)
		}, val)
	}
}
compose(b, a)()