"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballPlayer = void 0;
var FootballPlayer = /** @class */ (function () {
    function FootballPlayer(name, age, height, weight, clothersnumber, nation, numbergoals, salary) {
        this._name = name;
        this._age = age;
        this._height = height;
        this._weight = weight;
        this._clothersnumber = clothersnumber;
        this._nation = nation;
        this._numbergoals = numbergoals;
        this._salary = salary;
    }
    Object.defineProperty(FootballPlayer.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FootballPlayer.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FootballPlayer.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FootballPlayer.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (value) {
            this._weight = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FootballPlayer.prototype, "clothersnumber", {
        get: function () {
            return this._clothersnumber;
        },
        set: function (value) {
            this._clothersnumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FootballPlayer.prototype, "nation", {
        get: function () {
            return this._nation;
        },
        set: function (value) {
            this._nation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FootballPlayer.prototype, "numbergoals", {
        get: function () {
            return this._numbergoals;
        },
        set: function (value) {
            this._numbergoals = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FootballPlayer.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    return FootballPlayer;
}());
exports.FootballPlayer = FootballPlayer;
