"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var menuu_1 = require("./menu/menuu");
var enum_1 = require("./enum/enum");
var main_login_1 = require("./login/main_login");
var login = new main_login_1.logins();
var menu = new menuu_1.Menuu();
var loginMenu;
do {
    menu.menuLogin();
    loginMenu = +readline.question('Please enter : ');
    switch (loginMenu) {
        case enum_1.choice.CHOICE_LOGIN:
            login.login();
            break;
        case enum_1.choice.CHOICE_REGISTER:
            login.registerNewUser();
            break;
        case enum_1.choice.EXITS:
            break;
    }
} while (loginMenu != enum_1.choice.EXITS);
