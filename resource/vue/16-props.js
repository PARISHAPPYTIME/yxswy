/*

如果使用了路由，可以通过路由的prop属性，传递id的值：
const router = new VueRouter({
    routes: [{
        path: '/user/:id',
        component: User,
        props: (route) => ({
            这里猜测我觉得可以自己写一个固定值在路由上，这样子我们就可以使用配置了
            id: route.query.id
        })
    }]
})

*/