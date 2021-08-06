const express = require('express')
const app = express()

app.use((req, res, next) => {
    if (req.method === 'POST') {
        let body = ""
        req.on('data', function (data) {
            body = body + data
        })
        req.on('end', function () {
            const bodyObj = JSON.parse(body)
            req.body = bodyObj
            next()
        })
    } else {
        next()
    }
})

app.listen(3000)