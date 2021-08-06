// 迭代器 不返回新数组
// 用 forEach 开方
function square(num) {
  console.log(num, num * num)
}
const num = [1, 2, 3, 4, 5]
num.forEach(square)
console.log(num)
/*  1 1
    2 4
    3 9
    4 16
    5 25
*/

// 可以使用 try catch 的异常报错来终止 forEach 的循环 or  some 和 every 可以中断循环
