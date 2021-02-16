// splice 截取一个数组的子集作为一个新数组,
const num = [1, 2, 3, 4, 5, 6, 7]
const a = num.splice(3, 2) // 3 表示索引，2 表示删除 2 个
console.log(a) // [4, 5]
console.log(num) // [1, 2, 3, 6, 7]

// splice 不仅可以用来删除元素，还可以添加元素进数组
const num2 = [98,99,100,101];
num2.splice(1,0,89);     // 1 表示索引，0 表示不删除元素，89 表示将 89 这个元素添加进数组
console.log(num2);    // 98, 89, 99, 100, 101