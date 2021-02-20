"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("./logging");
var User1 = /** @class */ (function () {
    function User1(name, age) {
        this.name = name;
        this.setAge(age);
        this.writeLog('Class user');
    }
    User1.prototype.getName = function () {
        return this.name;
    };
    User1.prototype.setAge = function (age) {
        this.age = age;
    };
    User1.prototype.getAge = function () {
        return this.age;
    };
    User1 = __decorate([
        logging_1.Log(true),
        __metadata("design:paramtypes", [String, Number])
    ], User1);
    return User1;
}());
var user = new User1("John", 15);
console.log(user.getName());
console.log(user.getAge());
//# sourceMappingURL=class.js.map