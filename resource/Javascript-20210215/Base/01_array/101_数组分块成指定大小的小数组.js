// 把一个数组分块成指定大小的小数组
const chunk = (arr, size) => {
	return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
		arr.slice(i * size, i * size + size)
	)
}
console.log(chunk([1, 2, 3, 4, 65, 8, 8, 95, 85], 2))
