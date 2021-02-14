const http = require('http')

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.end('<h1>http://localhost:3000 服务开启</h1>')
    }
})

server.listen(3000, function () {
    console.log('http://localhost:3000 服务开启')
})