import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue'

const routes = [{
    path: '/',
    name: 'Main',
    component: () => import('../views/index.vue')
}]

const router = createRouter({
    history: createWebHashHistory('/'),
    routes: routes as unknown as RouteRecordRaw[],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app: App<Element>) {
    app.use(router)
}

export default router

