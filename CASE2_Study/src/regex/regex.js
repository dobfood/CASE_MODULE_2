"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regex = void 0;
var regex = /** @class */ (function () {
    function regex() {
        this.checkEmail = /^[a-z]\S[a-z0-9_\.]{5,32}@[gmail]{5}(\.[a-z0-9]{2,4}){1,2}$/;
        this.checkPassword = /^[A-Z]\w{5,12}\$/;
    }
    regex.prototype.checkE = function (email) {
        return this.checkEmail.test(email);
    };
    regex.prototype.checkP = function (password) {
        return this.checkPassword.test(password);
    };
    return regex;
}());
exports.regex = regex;
