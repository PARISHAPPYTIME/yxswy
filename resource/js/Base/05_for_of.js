// 迭代Array
let iterable = [10, 20, 30];

for (let value of iterable) {
    value += 1;
    console.log(value);
}
// 11
// 21
// 31


// 迭代String
let iterable = "boo";

for (let value of iterable) {
    console.log(value);
}
// "b"
// "o"
// "o"


// 迭代 TypedArray
let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
    console.log(value);
}
// 0
// 255


// 迭代Map
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
    console.log(entry);
}
// ["a", 1]
// ["b", 2]
// ["c", 3]

for (let [key, value] of iterable) {
    console.log(value);
}
// 1
// 2
// 3


// 迭代 Set
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
    console.log(value);
}
// 1
// 2
// 3


// 迭代 arguments 对象
(function() {
    for (let argument of arguments) {
        console.log(argument);
    }
})(1, 2, 3);

// 1
// 2
// 3


// 迭代 DOM 集合
//注意：这只能在实现了NodeList.prototype[Symbol.iterator]的平台上运行
let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
    paragraph.classList.add("read");
}


// 关闭迭代器 ---------------- 可以由break, throw  continue    或return终止
function* foo(){
    yield 1;
    yield 2;
    yield 3;
};

for (let o of foo()) {
    console.log(o);
    break; // closes iterator, triggers return
}


// 迭代生成器
function* fibonacci() { // 一个生成器函数
    let [prev, curr] = [0, 1];
    for (;;) { // while (true) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    console.log(n);
    // 当n大于1000时跳出循环
    if (n >= 1000)
        break;
}