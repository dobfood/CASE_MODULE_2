"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Week = void 0;
var Week = /** @class */ (function () {
    function Week(Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday) {
        this._Monday = Monday;
        this._Tuesday = Tuesday;
        this._Wednesday = Wednesday;
        this._Thursday = Thursday;
        this._Friday = Friday;
        this._Saturday = Saturday;
        this._Sunday = Sunday;
    }
    Object.defineProperty(Week.prototype, "Monday", {
        get: function () {
            return this._Monday;
        },
        set: function (value) {
            this._Monday = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Week.prototype, "Tuesday", {
        get: function () {
            return this._Tuesday;
        },
        set: function (value) {
            this._Tuesday = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Week.prototype, "Wednesday", {
        get: function () {
            return this._Wednesday;
        },
        set: function (value) {
            this._Wednesday = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Week.prototype, "Thursday", {
        get: function () {
            return this._Thursday;
        },
        set: function (value) {
            this._Thursday = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Week.prototype, "Friday", {
        get: function () {
            return this._Friday;
        },
        set: function (value) {
            this._Friday = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Week.prototype, "Saturday", {
        get: function () {
            return this._Saturday;
        },
        set: function (value) {
            this._Saturday = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Week.prototype, "Sunday", {
        get: function () {
            return this._Sunday;
        },
        set: function (value) {
            this._Sunday = value;
        },
        enumerable: false,
        configurable: true
    });
    return Week;
}());
exports.Week = Week;
