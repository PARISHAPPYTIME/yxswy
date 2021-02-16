function changStr(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
export default {
    install(Vue) {
        const requireAll = require.context("../components", false, /\.vue$/)
        requireAll.keys().forEach((item) => {
            Vue.component(
                changStr(item.replace(/\.\//, "").replace(/\.vue$/, "")),
                requireAll(item).default
            )
        })
    },
}

// 自动引入文件import
// 使用 import componentRegister from "./utils/componentRegister" Vue.use(componentRegister)

// 优化版本 （未测试）
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
    './components',
    // 是否查询其子目录
    false,
    /Base[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName)
    const componentName = upperFirst(
        camelCase(
            // 获取和目录深度无关的文件名
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')
        )
    )
    // 全局注册组件
    Vue.component(
        componentName,
        componentConfig.default || componentConfig
    )
})