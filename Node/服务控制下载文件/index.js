const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
    res.json({
        data: 'http://localhost:3000 服务开启'
    })
})

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/dl', (req, res) => {
    // 使用 res.download() 可以控制文件是下载的而不是新窗口打开的
    res.download(path.resolve(__dirname, 'public/index2.html'))
})

app.listen(3040, function () {
    console.log('http://localhost:3000 服务开启')
})

// 是接口返回的并不是 html 文件呈现在浏览器上，而是直接下载文件