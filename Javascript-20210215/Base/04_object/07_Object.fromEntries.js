// Object.entries()方法的作用是返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）

// 可以将 Map 转化为 Object:
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }


// 可以将 Array 转化为 Object:
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj2 = Object.fromEntries(arr);
console.log(obj2); // { 0: "a", 1: "b", 2: "c" }