function observe(value, cb) {
    Object.keys(value).forEach(key => defineReactive(value, key, value[key], cb))
}

function defineReactive(obj, key, val, cb) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: () => {
            /*依赖收集等......*/
            /*Github:https://github.com/answershuto*/
            return val
        },
        set: (newVal) => {
            val = newVal
            cb() /*订阅消息收到的消息回调*/
        }
    })
}

class Vue {
    constructor(options) {
        this._data = options.data
        observe(this._data, options.render)
    }
}

let app = new Vue({
    let: '#app',
    data: {
        text: 'text',
        text2: 'text2'
    },
    render() {
        console.log('render')
    }
})

/*代理*/
function _proxy(data) {
    const that = this
    Object.keys(data).forEach(key => {
        Object.defineProperty(that, key, {
            configurable: true,
            enumerable: true,
            get: function proxyGetter() {
                return that._data[key]
            },
            set: function proxySetter(val) {
                that._data[key] = val
            }
        })
    })
}

_proxy.call(this, options.data)
