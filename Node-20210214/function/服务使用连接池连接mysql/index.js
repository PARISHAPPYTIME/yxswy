const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'codes'
})

// 查询函数
const query = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                resolve(err)
            } else {
                connection.query(sql, params, (error, results, fields) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(results)
                    }
                    connection.release(err => {
                        if (err) console.log(' DB - 关闭数据库连接异常')
                    })
                })
            }
        })
    })
}

// 使用
// query(sql).then(value => {
//     res.json({
//         code: 200,
//         msg: "查询成功",
//         data: value
//     })
// })