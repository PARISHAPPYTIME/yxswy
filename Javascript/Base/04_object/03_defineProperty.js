/**
 * @name 语法 Object.defineProperty(obj, prop, descriptor)
 * @description  对对象的属性的 修改进行拦截
 * @param obj 需要修改操作的对象
 * @param prop 要定义的或修改的属性名称
 * @param descriptor 将被定义的或修改的属性描述符
 */

const obj = {}
Object.defineProperty(obj, 'name', {
    value: 'chi'
})
console.log(obj.name)