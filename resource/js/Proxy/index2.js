let arr = [1, 2, 3, 4, 5]

let unique = [...new Set(arr)]

let a = new Set([1, 2, 3])
let b = new Set([0, 2, 4])

let union = [...new Set([...a, ...b])]
console.log(union)

// 交集
let intersect = [...new Set([...a].filter(x => b.has(x)))]
console.log(intersect)

// 差集
let difference = [...new Set([...a].filter(x => !b.has(x)))]
console.log(difference)