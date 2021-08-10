// hasOwnProperty 判断 key 是否属于对象
const obj = {
    name: '烟熏三文鱼'
}
console.log(obj.hasOwnProperty('name'))

// 在 vue-cli3 和 eslint 中使用会报警告 请使用 Object.prototype.hasOwnProperty.call(obj, 'key')
// 参考 markdown 中的 第一项 或直接访问 https://blog.csdn.net/xiao1215fei/article/details/105409145