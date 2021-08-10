const jwt = require('jsonwebtoken')
const JWT_KEY = 'yxswy'

module.exports = {
    sign: (data) => {
        return jwt.sign(data, JWT_KEY, { expiresIn: 30 })
    },
    verify: (token) => {
        return new Promise(function (resolve, reject) {
            jwt.verify(token, JWT_KEY, function (err, decoded) {
                if (err) {
                    if (err.name === 'TokenExpiredError') { // token 过期
                        reject('token 过期')
                    } else if (err.name === 'JsonWebTokenError') { // token 无效
                        reject('token 无效')
                    } else {
                        reject('token 异常')
                    }
                } else {
                    resolve(decoded)
                }
            })
        })
    }
}