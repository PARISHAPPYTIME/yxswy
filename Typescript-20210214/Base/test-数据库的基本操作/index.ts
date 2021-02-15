interface DBI<T> {
    add(info:T):boolean
    update(info:T, id:number):boolean
    delete(id:number):boolean
    get(id:number):any[]
}

// 定义一个操作mysql数据库的类 注意：要实现泛型的接口，这个类也应该是一个泛型类
class MysqlDb<T> implements DBI<T> {
    add(info:T):boolean {
        throw new Error('Method not implemented')
    }
    update(info:T, id:number):boolean {
        throw new Error('Method not implemented')
    }
    delete(id:number):boolean {
        throw new Error('Method not implemented')
    }
    get(id:number):any[] {
        throw new Error('Method not implemented')
    }
}

// 定义一个操作mssql数据库的类
class MssqlDb<T> implements DBI<T> {
    add(info:T):boolean {
        throw new Error('Method not implemented')
    }
    update(info:T, id:number):boolean {
        throw new Error('Method not implemented')
    }
    delete(id:number):boolean {
        throw new Error('Method not implemented')
    }
    get(id:number):any[] {
        throw new Error('Method not implemented')
    }
}

// 操作用户表 定义一个User类和数据表映射
class sql_User{
    username:string | undefined
    password:string | undefined
}

const sql_u = new sql_User()
sql_u.username = 'yddd'
sql_u.password = '123456'

const oMysql = new MySqlDb<sql_User>()
oMysql.add(sql_u)