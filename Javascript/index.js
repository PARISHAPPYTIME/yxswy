// 防抖
const debounce = (fun,delay) => {
    let timer = null;
    return function (...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
        fun.apply(this,args)
        },delay)
    }
}

// 解构赋值
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []
// 感觉方便提取最后一个之类的用法

// 逻辑与-逻辑或
// *true true _> true
// *true false _> false
// *false true _> false
// *false false _> false
// todo 第一个为  false 时不执行后面的代码
var found = false;
var result = (found && 48);
console.log(result);

found = true;
result = (found && 48);
console.log(result);

// !||
// *true true _> true
// *true false _> true
// *false true _> true
// *false false _> false
// todo 第一个为 false 时执行后面的代码
msg("")
msg("222")
msg(1)
function msg(num) {
  var defaultNum = num || 0;
  console.log(defaultNum)
}

// 原生js - 查找父元素
document.getElementsByClassName('mce-i-image')[0].parentNode

// 求最大值和最小值
// 最大
export const max = (arr) => {
    return Math.max.apply(null, arr);
}
// 最小
export const min = (arr) => {
    return Math.min.apply(null, arr);
}