"use strict";
// 方法装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function functionMethod(params) {
    return function (target, methodName, desc) {
        console.log(desc.value);
        // 修改装饰器的方法
        var oMethod = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            console.log(args);
            oMethod.apply(this, args);
        };
    };
}
var FunctionMyName = /** @class */ (function () {
    function FunctionMyName() {
        // this.name = name
    }
    FunctionMyName.prototype.getName = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        return this.name;
    };
    __decorate([
        functionMethod('http://www.baidu.com')
    ], FunctionMyName.prototype, "getName", null);
    return FunctionMyName;
}());
var funMyName = new FunctionMyName();
funMyName.getName(2, 8, '33');
