/** @description provide inject
 *  主要在开发高阶组件的时候使用，并不推荐于普通应用程序中
 *  */

// 父类
export default {
    provide() {
        return {
            app: this
        }
    }
}

// 子类
export default {
    inject: ['app'],
    create() {
        console.log(this.app)
    }
}

// 子类2 vue 设置默认值 需要在2.50+
export default {
    inject: {
        app: {
            default: () => ({})
        }
    }
}

// 子类3 设置别名
export default {
    inject: {
        myApp: {
            from: 'app',
            default: () => ({})
        }
    }
}