// 递归
const fun = (n) => {
    console.log(n)
    if(n > 0) fun(--n)
}

// 优化
const Fun = function fn(n) {
    console.log(n)
    if(n > 0) fn(--n)
}
