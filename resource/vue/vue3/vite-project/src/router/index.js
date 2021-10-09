import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
    // 指定 路由模式
    // history: createWebHashHistory(),
    history: createWebHistory(),
    // 路由地址
    routes: [
        { path: '/homepage', component: () => import('../views/homepage.vue') }
    ]
})

router.beforeEach((to, from, next) => {
    next(vm => {
        console.log(vm)
    })
})

export default router
