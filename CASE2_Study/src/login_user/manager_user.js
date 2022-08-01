"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager_user = void 0;
var Manager_user = /** @class */ (function () {
    function Manager_user() {
    }
    Manager_user.prototype.showAll = function () {
        return Manager_user.manageruser;
    };
    Manager_user.prototype.addUser = function (user) {
        Manager_user.manageruser.push(user);
    };
    Manager_user.prototype.check = function (email, password) {
        var flag = false;
        for (var i = 0; i < Manager_user.manageruser.length; i++) {
            if (Manager_user.manageruser[i].email === email && Manager_user.manageruser[i].password === password) {
                flag = true;
            }
        }
        return flag;
    };
    Manager_user.manageruser = [];
    return Manager_user;
}());
exports.Manager_user = Manager_user;
