"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Investor = void 0;
var Investor = /** @class */ (function () {
    function Investor(name, id, share, investmentamount) {
        this._name = name;
        this._id = id;
        this._share = share;
        this._investmentamount = investmentamount;
    }
    Object.defineProperty(Investor.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Investor.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Investor.prototype, "share", {
        get: function () {
            return this._share;
        },
        set: function (value) {
            this._share = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Investor.prototype, "investmentamount", {
        get: function () {
            return this._investmentamount;
        },
        set: function (value) {
            this._investmentamount = value;
        },
        enumerable: false,
        configurable: true
    });
    return Investor;
}());
exports.Investor = Investor;
