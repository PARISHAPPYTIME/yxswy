// sort 数组排序
const str = ["hello","client","zero"];
str.sort();
console.log(str);     // ["client", "hello", "zero"]  按照字母 a-z 排列准确

const nums = [1,200,51,66,88];
nums.sort();
console.log(nums);   // [1, 200, 51, 66, 88]  有趣的事情来了，因为 200 的 2 比 51 的 5 先，所以 200 排在 51 前头

// 那如何解决这种排序的错误呢？方法就是在调用 sort() 的时候传入一个函数，该函数可以比较出大小。
function compare(num1,num2){
    return num1 - num2;
}
const nums2 = [3,1,2,100,4,200];
nums2.sort(compare);
console.log(nums2);    // 1, 2, 3, 4, 100, 200
// compare 函数就是利用了两数相减，如果结果为正，那么被减数大于减数，如果结果为 0，则两数相等，而如果结果为负，说明被减数小于减数。