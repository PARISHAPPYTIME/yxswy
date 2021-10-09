export default {
    created() {
        const unwatchFn = this.$watch('count', function(newValue, oldValue) {
            console.log('count' + newValue)
        })
        unwatchFn() // 销毁
    }
}