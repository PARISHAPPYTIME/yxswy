// 迭代器 会返回新数组
// map 的作用与 forEach 是一样的，区别就是 map 函数返回的是一个新数组。
function addFive(grade){
    return grade += 5;
}
const grade = [77,82,88,95,90];
const result = grade.map(addFive);
console.log(result);     // 82, 87, 93, 100, 95