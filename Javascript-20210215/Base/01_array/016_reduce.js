// 迭代器 有两个功能，一是可以对数组元素进行求和，二是将数组元素连接成字符串。
// 不返回新数组
function add(num1,num2){
    return num1 + num2;
}
const num = [1,2,3,4];
const sum = num.reduce(add);
console.log(sum);    // 10

function concat(str,i) {
    return str + i;
}
const words = ["I am ","a ","coder "];
const re = words.reduce(concat);
console.log(re);     // I am a coder