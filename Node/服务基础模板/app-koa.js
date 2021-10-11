const Koa = require('koa')
const app = Koa()

app.use(async ctx => {
    ctx.body = 'Hello World'
})

app.listen(3000)