"use strict";
// 方法参数装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function functionMethod2(params) {
    return function (target, methodName, paramsIndex) {
        console.log(params, target, methodName, paramsIndex);
        console.log(target[methodName]);
    };
}
var FunctionMyName2 = /** @class */ (function () {
    function FunctionMyName2() {
        // this.name = name
    }
    FunctionMyName2.prototype.getName = function (uuid, uuid2) {
        console.log(uuid, uuid2);
        return this.name;
    };
    __decorate([
        __param(0, functionMethod2('uuid')),
        __param(1, functionMethod2('uuid2'))
    ], FunctionMyName2.prototype, "getName", null);
    return FunctionMyName2;
}());
var funMyName2 = new FunctionMyName2();
funMyName2.getName(2222, 8);
