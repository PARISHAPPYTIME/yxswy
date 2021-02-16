// 数组扁平化
const arr = [1, [2, [3, [4, 5]]], 6]
// const str = arr.join(',')
// st res1 = arr.flat(Infinity);
// const res2 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');
const flatten = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}
const res4 = flatten(arr)
console.log(res4)

// ---------------------------------------

function flatten(ary) {
  return ary.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}
console.log(flatten(ary))
while (ary.some(Array.isArray)) {
  ary = [].concat(...ary)
}
console.log(ary)

// ---------------------------------------

let result = []
let fn = function (ary) {
  for (let i = 0; i < ary.length; i++) {
    let item = ary[i]
    if (Array.isArray(ary[i])) {
      fn(item)
    } else {
      result.push(item)
    }
  }
}
fn(ary)
console.log(result)

// ---------------------------------------

let str = JSON.stringify(ary)
str = str.replace(/(\[|\])/g, '')
str = '[' + str + ']'
ary = JSON.parse(str)
console.log(ary)
