const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        data: 'http://localhost:3000 服务开启'
    })
})

app.listen(3000, function () {
    console.log('http://localhost:3000 服务开启')
})