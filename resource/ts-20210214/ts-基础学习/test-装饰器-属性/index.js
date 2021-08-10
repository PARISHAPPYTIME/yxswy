"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logProperty(params) {
    return function (target, attr) {
        console.log(params, target, attr);
        target[attr] = params;
        // 修改属性的值
    };
}
var ObjMyName = /** @class */ (function () {
    function ObjMyName() {
        // this.name = name
    }
    ObjMyName.prototype.getName = function () {
        console.log(this.name);
        return this.name;
    };
    __decorate([
        logProperty('http://www.baidu.com')
    ], ObjMyName.prototype, "name", void 0);
    return ObjMyName;
}());
var objMyName = new ObjMyName();
objMyName.getName();
