"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 装饰器
// 普通装饰器，不能传参
function get(params) {
    console.log(params);
    params.prototype.apiUrl = 'xxx';
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
    };
    HttpClient = __decorate([
        get
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
console.log(http);
function newGet(params) {
    return function (target) {
        console.log(target, params);
    };
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
    }
    HttpClient2.prototype.getData = function () {
    };
    HttpClient2 = __decorate([
        newGet('hello')
    ], HttpClient2);
    return HttpClient2;
}());
var http2 = new HttpClient2();
console.log(http2);
function test(n1) {
    console.log('生命2');
    return function (n2) {
        return function (n3) {
            return function (target) {
                console.log(n1, n2, n3, target);
            };
        };
    };
}
var MyName = /** @class */ (function () {
    function MyName(name) {
        console.log('生命一');
    }
    MyName = __decorate([
        test(1)(2)(3)
    ], MyName);
    return MyName;
}());
var myName = new MyName('ee');
function test2(target) {
    return /** @class */ (function (_super) {
        __extends(newMyName2, _super);
        function newMyName2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = '我是修改后的户手机v';
            return _this;
        }
        newMyName2.prototype.getData = function () {
        };
        return newMyName2;
    }(target));
}
var MyName2 = /** @class */ (function () {
    function MyName2(name) {
        this.apiUrl = name;
    }
    MyName2 = __decorate([
        test2
    ], MyName2);
    return MyName2;
}());
var myName2 = new MyName2('ee');
console.log(myName2);
