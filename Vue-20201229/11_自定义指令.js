Vue.directive('yan', (el, data) => {
    console.log(data)
})

// <div id="app" v-yan:bind.sync.right="true">
//   </div> 参数都能在 data 中找到