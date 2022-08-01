"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractCoach = void 0;
var ContractCoach = /** @class */ (function () {
    function ContractCoach(contract, salary) {
        this._contractCoach = contract;
        this._salary = salary;
    }
    Object.defineProperty(ContractCoach.prototype, "contract", {
        get: function () {
            return this._contractCoach;
        },
        set: function (value) {
            this._contractCoach = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContractCoach.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    return ContractCoach;
}());
exports.ContractCoach = ContractCoach;
