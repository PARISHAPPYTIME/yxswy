// 迭代器 some 只要有一个元素使改函数返回 true ，那么该方法就返回 true
// 不返回新数组
function isEven(num){
    return num % 2 == 0;
}
const num = [1,2,3,4,5,6,7,8];
const someEven = num.some(isEven);
if(someEven){
    console.log("有些数字是偶数");
}else{
    console.log("没有数字是偶数");
}