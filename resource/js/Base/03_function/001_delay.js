// 延迟
function delay(func, wait, ...args) {
    if(typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }
    return setTimeout(func, +wait || 0, ...args)
}

export default delay

// test --
// console.log(1)
// delay((arr) => {
//     console.log(arr)
// }, 2200, [console.log(2),2,3,5,8,9,8])

/**
 * setTimeout
 *  @param func 函数/方法
 *  @param wait 延时时间
 *  @param args 需要传递给定时器的参数
 */