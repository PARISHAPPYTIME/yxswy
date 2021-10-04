const vm = {
    methods: {
        updateMessage: async function () {
            this.message = '已更新'
            //在这里可以看出，message并没有立刻被执行
            //要理解页面刷新和代码执行速度的差别
            //通常我们在页面上立刻就能看到结果，那是因为一轮队列执行其实很快，感觉不出DOM刷新的过程和所耗费的时间
            //但对于代码的执行，属于即刻级别，DOM没更新就是没更新，就是会有问题
            console.log(this.$el.textContent) // => '未更新'
        
            await this.$nextTick()
            console.log(this.$el.textContent) // => '已更新'
        }
    }
}