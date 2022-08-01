"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logins = void 0;
var readline = require("readline-sync");
var enum_1 = require("../enum/enum");
var menuu_1 = require("../menu/menuu");
var enum_2 = require("../enum/enum");
var user_1 = require("../login_user/user");
var regex_1 = require("../regex/regex");
var manager_user_1 = require("../login_user/manager_user");
var main_boss_1 = require("../boss/main_boss");
var main_coach_1 = require("../boss/main_coach");
var main_investor_1 = require("../boss/main_investor");
var main_player_1 = require("../boss/main_player");
var Boss = new main_boss_1.boss();
var Coach = new main_coach_1.main_coach();
var Investor = new main_investor_1.main_Investor();
var Player = new main_player_1.main_player();
var regexs = new regex_1.regex();
var menu = new menuu_1.Menuu();
var newUser = new manager_user_1.Manager_user();
var logins = /** @class */ (function () {
    function logins() {
    }
    logins.prototype.registerNewUser = function () {
        var email = readline.question('Nhap Email : ');
        if (regexs.checkE(email)) {
            var password = readline.question('Nhap Password : ');
            if (regexs.checkP(password)) {
                var newUsers = new user_1.User(email, password);
                newUser.addUser(newUsers);
            }
            else {
                console.log("Password phai co chu cai hoa dau tien va co 6-12 ky tu ");
            }
        }
        else {
            console.log("Gmail phai co 5-32 ky tu va theo mau \n name_email@gmail.com.vn");
            this.registerNewUser();
        }
    };
    logins.prototype.logiN = function () {
        var email = readline.question('Nhap Email');
        var password = readline.question('Nhap Password');
        if (newUser.check(email, password)) {
            console.log('Dang nhap thanh cong');
            Player.player();
        }
        else {
            console.log('Xin day,neu chua dang ky thi dung dang nhap \n con neu dang nhap thi nhap cho dung');
            this.logiN();
        }
    };
    logins.prototype.inputAcountBoss = function () {
        var email = readline.question('Nhap Email : ');
        var password = readline.question('Nhap Password : ');
        if (email == "boss@gmail.com") {
            if (password == "123") {
                console.log("Ban dang su dung tai khoang Boss");
                Boss.Boss();
            }
            else {
                console.log("Nhap lai di");
            }
        }
        else {
            console.log("May khong phai boss dung khong ");
            this.inputAcountBoss();
        }
    };
    logins.prototype.inputAcountCoach = function () {
        var email = readline.question('Nhap Email : ');
        var password = readline.question('Nhap Password : ');
        if (email == "coach@gmail.com") {
            if (password == "123") {
                console.log("Ban dang su dung tai khoang Coach");
                Coach.Coach();
            }
            else {
                console.log("Nhap lai di");
            }
        }
        else {
            console.log("May khong phai HLV dung khong ");
            this.inputAcountCoach();
        }
    };
    logins.prototype.inputAcountInvestor = function () {
        var email = readline.question('Nhap Email : ');
        var password = readline.question('Nhap Password : ');
        if (email == "investor@gmail.com") {
            if (password == "123") {
                Investor.investor();
            }
            else {
                console.log("May khong phai investor dung khong");
            }
        }
        else {
            console.log("Nhap lai di");
            this.inputAcountInvestor();
        }
    };
    logins.prototype.login = function () {
        var choice;
        do {
            menu.menuu();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case enum_1.choiceLogin.CHOICE_USER:
                    this.logiN();
                    break;
                case enum_1.choiceLogin.CHOICE_VIP:
                    this.VIP();
                    break;
                case enum_1.choiceLogin.EXITS:
                    break;
            }
        } while (choice != enum_1.choiceLogin.EXITS);
    };
    logins.prototype.VIP = function () {
        var choice;
        do {
            menu.menuVIP();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case enum_2.choiceVIP.LOGIN_BOSS:
                    this.inputAcountBoss();
                    break;
                case enum_2.choiceVIP.LOGIN_COACH:
                    this.inputAcountCoach();
                    break;
                case enum_2.choiceVIP.LOGIN_INVESTOR:
                    this.inputAcountInvestor();
                    break;
                case enum_2.choiceVIP.EXITS:
                    break;
            }
        } while (choice != enum_2.choiceVIP.EXITS);
    };
    return logins;
}());
exports.logins = logins;
