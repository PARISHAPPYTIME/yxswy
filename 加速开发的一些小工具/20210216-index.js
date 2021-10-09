// 使用 字符串 来读取对象中的数据
const getValueByPath = function (object, prop) {
    prop = prop || '';
    const paths = prop.split('.');
    let current = object;
    let result = null;
    for (let i = 0, j = paths.length; i < j; i++) {
        const path = paths[i];
        if (!current) break;

        if (i === j - 1) {
            result = current[path];
            break;
        }
        current = current[path];
    }
    return result;
};

/**
 * 给对象注入属性
 * @param keys 属性key数组， 如 keys = ['config', 'path'] , 则会给对象注入 object.config.path 的属性
 * @param value 属性值
 * @returns {Object}
 */
// 可以直接使用对象上的方法，使用 assignProps 为对象添加一个属性
Object.defineProperty(Object.prototype, 'assignProps', {
    writable: false,
    enumerable: false,
    configurable: true,
    value: function (keys, value) {
        let props = this
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            if (i == keys.length - 1) {
                props[key] = value
            } else {
                props[key] = props[key] == undefined ? {} : props[key]
                props = props[key]
            }
        }
        return this
    }
})

const hasOwnProperty = Object.prototype.hasOwnProperty;

export function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
};

function extend(to, _from) {
    for (let key in _from) {
        to[key] = _from[key];
    }
    return to;
};

export function toObject(arr) {
    var res = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res;
};

export const valueEquals = (a, b) => {
    // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
    if (a === b) return true;
    if (!(a instanceof Array)) return false;
    if (!(b instanceof Array)) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i !== a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
};

