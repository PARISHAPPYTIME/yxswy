// @ts-ignore
import Vue from 'vue'
import App from './App.vue'
import ItemData from "./module/itemData";
import Types from "@/module/Enum";

Vue.config.productionTip = false

new Vue({
  render: (h: (arg0: any) => any) => h(App),
}).$mount('#app')

let item = new ItemData(12, '胡汉三', Types.SUCCESS, true)
console.log(item)
