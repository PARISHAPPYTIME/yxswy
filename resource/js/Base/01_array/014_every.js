// 迭代器 every() 返回值为布尔类型，对于应用的所有元素，该函数返回 true，则该方法返回 true
// 不返回新数组
function isEven(num){
    return num % 2 === 0;
}
const num = [2,4,6,8,10];
const even = num.every(isEven);
if(even){
    console.log("所有的数字都是偶数");
}else{
    console.log("不是所有的数字都是偶数");
}
// every 需要所有都为 true
