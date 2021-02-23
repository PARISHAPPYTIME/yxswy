const express = require('express')
const path = require('path')

const app = express()

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    // res.header("X-Powered-By",' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8"); // 设置了这一行，返回的页面将会变成《 纯文本 》内容返回到页面上
    next()
})

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/md', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

const port = 3011
app.listen(port, () => {
    console.log(`服务开启 http://localhost:${port}`)
})
