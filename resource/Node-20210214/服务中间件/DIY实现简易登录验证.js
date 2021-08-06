const express = require('express')
const app = express()

const TokenFailure = (data) => {
    return {
        code: RES_TYPE.TOKEN_FAILURE,
        data,
        message: "Token failure"
    }
}
const whiteList = ['/login', '/searchUser']

app.use((req, res, next) => {
    const { token } = req.cookies
    const url = req.url
    if (whiteList.indexOf(url) !== -1) {
        verify(token).then(decoded => {
            if (decoded.nickname) {
                next()
            } else {
                res.json(TokenFailure())
            }
        }).catch(e => {
            res.json(TokenFailure(e))
        })
    } else {
        next()
    }
})

app.listen(3000)