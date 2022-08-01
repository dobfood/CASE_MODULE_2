"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractInvestor = void 0;
var ContractInvestor = /** @class */ (function () {
    function ContractInvestor(timecontract, annualprofit, Investor) {
        this._contractInvestor = timecontract;
        this._annualprofit = annualprofit;
        this._investor = Investor;
    }
    Object.defineProperty(ContractInvestor.prototype, "timecontract", {
        get: function () {
            return this._contractInvestor;
        },
        set: function (value) {
            this._contractInvestor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContractInvestor.prototype, "annualprofit", {
        get: function () {
            return this._annualprofit;
        },
        set: function (value) {
            this._annualprofit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContractInvestor.prototype, "Investor", {
        get: function () {
            return this._investor;
        },
        set: function (value) {
            this._investor = value;
        },
        enumerable: false,
        configurable: true
    });
    return ContractInvestor;
}());
exports.ContractInvestor = ContractInvestor;
