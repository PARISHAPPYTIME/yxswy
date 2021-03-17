import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App2.vue'

import element3 from "element3";
import "element3/lib/theme-chalk/index.css";

createApp(App)
    .use(router)
    .use(element3)
    .use(store)
    .mount('#app')
