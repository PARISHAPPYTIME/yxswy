// https://xin-tan.com/2020-01-10-nodejs-events/

const { EventEmitter } = require('events')

// 事件驱动模型
class MyEmitter extends EventEmitter {}

const ins = new MyEmitter()

// 优雅的错误处理
EventEmitter.prototype.safeEmit = function(name, ...args) {
    try {
        return this.emit(name, ...args)
    } catch(error) {
        return this.emit("error", error)
    }
}

// 监听器队列顺序处理
EventEmitter.prototype.insertListener = function(
    name, index, callback, once = false
) {
    // 如果是 once 监听器，其数据结构是 { listener: Function }
    // 正常监听器，直接是 Function
    const listeners = ins.rawListeners(name);
    console.log(listeners)
    const that = this;
    // 下标不合法
    if (index > listeners.length || index < 0) {
        return false;
    }
    // 绑定监听器数量已达上限
    if (listeners.length >= this.getMaxListeners()) {
        return false;
    }
    listeners.splice(index, 0, once ? { listener: callback } : callback);
    this.removeAllListeners(name);
    listeners.forEach(function(item) {
        if (typeof item === "function") {
            that.on(name, item);
        } else {
            const { listener } = item;
            that.once(name, listener);
        }
    });
    return true;
}

// 推荐做法是：在创建实例后，应该立即注册error事件。
ins.on("error", error => {
    console.log("error msg is ", error)
})

ins.on("test", () => {
    console.log("test 1")
})

ins.on("test", () => {
    console.log("test 2")
})

ins.insertListener("test", 0, () => {
    console.log("once test insert")
}, true)

ins.insertListener("test", 1, () => {
    console.log("test insert")
})

ins.emit("test")
ins.emit("test")