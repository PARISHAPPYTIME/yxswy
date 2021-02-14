const connection = require('../shared/connectMySql.js')

/* 'SELECT 1 + 1 AS solution' */
module.exports = {
    query: function (query) {
        return new Promise(function (resolve, reject) {
            console.log(`数据库：查询 ${query}`)
            connection.query(query, function (error, results, fields) {
                if (error) reject(error)
                resolve(results)
            })
        })
    }
}

// 使用
// const result = await query(
//     `INSERT INTO users (nickname,status,password) VALUES('${nickname}', 1, '${password}'); `
// )