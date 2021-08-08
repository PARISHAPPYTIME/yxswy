let zEvent = {
    even: {
        // 将每个事件放入事件队列中，fileSuccess:[fn,fn,fn]。
    },
    on(eventName, eventFn) {
        // 判断事件是否存在，并将每个事件添加到数组中。
        if (this.even[eventName]) {
            this.even[eventName].push(eventFn);
        } else {
            this.even[eventName] = [];
            this.even[eventName].push(eventFn);
        }
    },
    emit(eventName, eventMsg) {
        // 判断事件是否存在，并循环调用每个事件。
        if (this.even[eventName]) {
            this.even[eventName].forEach(itemFn => {
                itemFn(eventMsg);
            })
        }
    }
}

// 监听要处理的事件
zEvent.on('fileSuccess', eventMsg => {
    console.log("1数据库查看信息");
})
zEvent.on('fileSuccess', eventMsg => {
    console.log("3数据库查看学校");
})
zEvent.on('fileSuccess', eventMsg => {
    console.log("2数据库查看性别");
})
zEvent.emit('fileSuccess')