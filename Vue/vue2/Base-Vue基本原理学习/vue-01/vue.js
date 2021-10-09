class Vue {
    constructor(options) {
        // 保存选项
        this.$options = options
        // 传入 data
        this.$data = options.data
        // 响应化处理
        this.observe(this.$data)

        new Watcher(this, 'foot')
        this.foot; // 读一次 ，触发依赖收集
        new Watcher(this, 'bar.mua')
        this.bar.mua;
    }

    observe(value) {
        if(!value || typeof value !== 'object') {
            return
        }
        // 遍历 value
        Object.keys(value).forEach(key => {
            // 响应式处理
            this.defineReactive(value, key, value[key])
            this.proxyData(key)
        })
    }

    defineReactive(obj, key, val) {
        // 递归
        this.observe(val)

        // 定义了一个 Dep
        // 每个 dep 实例和 data 中每个 key 有一个一对一的关系
        const dep = new Dep()

        // 给 obj 的每一个 key 定义拦截
        Object.defineProperty(obj, key, {
            get() {
                Dep.target && dep.addDep(Dep.target)
                return val
            },
            set(newVal) {
                if(newVal !== val) {
                    val = newVal
                    // console.log(key + "属性更新了")
                    dep.notify()
                }
            }
        })
    }

    proxyData(key) {
        Object.defineProperty(this, key, {
            get() {
                return this.$data[key]
            },
            set(newVal) {
                this.$data[key] = newVal
            }
        })
    }
}

// 创建 Dep: 管理所有的 watcher
class Dep {
    constructor() {
        // 存储所有的依赖
        this.deps = []
    }

    addDep(dep) {
        this.deps.push(dep)
    }

    notify() {
        this.deps.forEach(dep => dep.update())
    }
}

// 创建 Watcher: 保存 data 中数值和页面中的挂钩关系
class Watcher {
    constructor(vm, key) {
        // 创建实例时立即将该实例指向 Dep.target 便于依赖收集
        Dep.target = this
        this.vm = vm;
        this.key = key
    }

    update() {
        console.log(this.key + '更新了')
    }
}
