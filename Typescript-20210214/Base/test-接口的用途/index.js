"use strict";
// 接口： 行为和动作的规范，对批量方法进行约束
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printName(name) {
    console.log(name.firstName, name.secondName);
}
var obj = {
    firstName: '2',
    secondName: '3',
    age: 23
};
printName(obj);
var md5 = function (key, value) {
    return key + value;
};
var md53 = function (key, value) {
    return key + value;
};
var arr = [123, 45678, 78];
var arrN2 = ["str", "jjo"];
var objN2 = {
    name: '789'
};
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.codding = function (code) {
        console.log(this.name + '学到');
    };
    return Dog;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name) {
        return _super.call(this, name) || this;
    }
    Person.prototype.eat = function (str) {
        console.log(this.name);
    };
    Person.prototype.work = function (flag) {
        return '2';
    };
    return Person;
}(Dog));
var dog = new Person("小黑");
function getData(value) {
    return value;
}
getData(4123);
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m1 = new MinClass();
m1.add(2);
m1.add(3);
m1.add(4);
var m2 = new MinClass();
m2.add('2');
m2.add('3');
m2.add('a');
var setData = function (val1, val2) {
    return val1 + val2;
};
setData('name', '颤三');
function getData2(value) {
    return value;
}
var newGetData2 = getData2;
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// class MySqlDb {
//     add(user: User): boolean {
//         return true
//     }
// }
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
    }
    MySqlDb.prototype.add = function (info) {
        return true;
    };
    return MySqlDb;
}());
var ArticleCate = /** @class */ (function () {
    function ArticleCate() {
    }
    return ArticleCate;
}());
var u = new User();
u.username = '2';
u.password = '789';
var db = new MySqlDb();
db.add(u);
