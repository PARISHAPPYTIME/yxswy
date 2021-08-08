function Args() {
  let arr1 = [...arguments]
  let arr2 = Array.prototype.slice.call(arguments)
  let arr3 = Array.from(arguments)
  let arr4 = Array.prototype.concat.apply([], arguments)
  console.log(arr1, arr2, arr3, arr4)
}
Args('this is name', true)
