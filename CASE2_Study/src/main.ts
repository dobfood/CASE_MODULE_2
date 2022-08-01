import *as readline from 'readline-sync';
import {Menuu} from "./menu/menuu";
import {choice} from "./enum/enum";
import {logins} from "./login/main_login";

let login = new logins()
let menu = new Menuu();
let loginMenu
do {
    menu.menuLogin()
    loginMenu = +readline.question('Please enter : ')
    switch (loginMenu) {
        case choice.CHOICE_LOGIN:
            login.login();
            break;
        case choice.CHOICE_REGISTER:
            login.registerNewUser()
            break;
        case choice.EXITS:
            break;
    }

} while (loginMenu != choice.EXITS)