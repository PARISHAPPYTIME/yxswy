// 迭代器 返回新数组
// filter 和 every 相似，区别在于当所有的元素使改函数为 true 时，
// 它并不返回布尔类型，而是返回一个新数组。
// 下面这个例子十分有趣，它随机产生10个 0 到 100 的数字作为分数，然后把大于 60 的及格分数筛选出来。
function passing(num){
    return num >= 60;
}
const grades = [];
for(let i = 0;i < 11;i++){
    grades[i] = Math.floor(Math.random() * 101);
}
const pass = grades.filter(passing);
console.log("随机产生的 10 个同学的分数为：");
console.log(grades);
console.log("及格的分数有：");
console.log(pass);