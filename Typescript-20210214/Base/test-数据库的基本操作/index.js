"use strict";
// 定义一个操作mysql数据库的类 注意：要实现泛型的接口，这个类也应该是一个泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        throw new Error('Method not implemented');
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error('Method not implemented');
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error('Method not implemented');
    };
    MysqlDb.prototype.get = function (id) {
        throw new Error('Method not implemented');
    };
    return MysqlDb;
}());
// 定义一个操作mssql数据库的类
var MssqlDb = /** @class */ (function () {
    function MssqlDb() {
    }
    MssqlDb.prototype.add = function (info) {
        throw new Error('Method not implemented');
    };
    MssqlDb.prototype.update = function (info, id) {
        throw new Error('Method not implemented');
    };
    MssqlDb.prototype.delete = function (id) {
        throw new Error('Method not implemented');
    };
    MssqlDb.prototype.get = function (id) {
        throw new Error('Method not implemented');
    };
    return MssqlDb;
}());
// 操作用户表 定义一个User类和数据表映射
var sql_User = /** @class */ (function () {
    function sql_User() {
    }
    return sql_User;
}());
var sql_u = new sql_User();
sql_u.username = 'yddd';
sql_u.password = '123456';
var oMysql = new MySqlDb();
oMysql.add(sql_u);
