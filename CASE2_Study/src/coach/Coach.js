"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coach = void 0;
var Coach = /** @class */ (function () {
    function Coach(name, age, experience) {
        this._name = name;
        this._age = age;
        this._experience = experience;
    }
    Object.defineProperty(Coach.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coach.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coach.prototype, "experience", {
        get: function () {
            return this._experience;
        },
        set: function (value) {
            this._experience = value;
        },
        enumerable: false,
        configurable: true
    });
    return Coach;
}());
exports.Coach = Coach;
