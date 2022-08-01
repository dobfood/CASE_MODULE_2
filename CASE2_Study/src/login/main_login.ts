import * as readline from "readline-sync";
import {choiceLogin} from "../enum/enum";
import {Menuu} from "../menu/menuu";
import {choiceVIP} from "../enum/enum";
import {User} from "../login_user/user";
import {regex} from "../regex/regex";
import {Manager_user} from "../login_user/manager_user";
import {boss} from "../boss/main_boss";
import {main_coach} from "../boss/main_coach";
import {main_Investor} from "../boss/main_investor";
import {main_player} from "../boss/main_player";

let Boss = new boss()
let Coach = new main_coach()
let Investor = new main_Investor()
let Player = new main_player()
let regexs = new regex()
let menu = new Menuu()
let newUser = new Manager_user()

export class logins {
    registerNewUser() {
        let email = readline.question('Nhap Email : ')
        if (regexs.checkE(email)) {
            let password = readline.question('Nhap Password : ')
            if (regexs.checkP(password)) {
                let newUsers = new User(email, password)
                newUser.addUser(newUsers);
            } else {
                console.log("Password phai co chu cai hoa dau tien va co 6-12 ky tu ")
            }
        } else {
            console.log("Gmail phai co 5-32 ky tu va theo mau \n name_email@gmail.com.vn")
            this.registerNewUser()
        }
    }

    logiN() {
        let email = readline.question('Nhap Email');
        let password = readline.question('Nhap Password');
        if (newUser.check(email, password)) {
            console.log('Dang nhap thanh cong')
            Player.player()
        } else {
            console.log('Xin day,neu chua dang ky thi dung dang nhap \n con neu dang nhap thi nhap cho dung')
            this.logiN()
        }
    }

    inputAcountBoss() {
        let email = readline.question('Nhap Email : ')
        let password = readline.question('Nhap Password : ')
        if (email == "boss@gmail.com") {
            if (password == "123") {
                console.log("Ban dang su dung tai khoang Boss")
                Boss.Boss()
            } else {
                console.log("Nhap lai di")
            }
        } else {
            console.log("May khong phai boss dung khong ")
            this.inputAcountBoss()
        }
    }

    inputAcountCoach() {
        let email = readline.question('Nhap Email : ')
        let password = readline.question('Nhap Password : ')
        if (email == "coach@gmail.com") {
            if (password == "123") {
                console.log("Ban dang su dung tai khoang Coach")
                Coach.Coach()
            } else {
                console.log("Nhap lai di")
            }
        } else {
            console.log("May khong phai HLV dung khong ")
            this.inputAcountCoach()
        }
    }

    inputAcountInvestor() {
        let email = readline.question('Nhap Email : ')
        let password = readline.question('Nhap Password : ')
        if (email == "investor@gmail.com") {
            if (password == "123") {
                Investor.investor()
            } else {
                console.log("May khong phai investor dung khong")
            }
        } else {
            console.log("Nhap lai di")
            this.inputAcountInvestor()
        }
    }

    login() {
        let choice
        do {
            menu.menuu()
            choice = +readline.question('Please enter : ')
            switch (choice) {
                case choiceLogin.CHOICE_USER:
                    this.logiN()
                    break;
                case choiceLogin.CHOICE_VIP:
                    this.VIP()
                    break;
                case choiceLogin.EXITS:
                    break;
            }
        } while (choice != choiceLogin.EXITS)
    }

    VIP() {
        let choice
        do {
            menu.menuVIP()
            choice = +readline.question('Please enter : ')
            switch (choice) {
                case choiceVIP.LOGIN_BOSS:
                    this.inputAcountBoss()
                    break;
                case choiceVIP.LOGIN_COACH:
                    this.inputAcountCoach()
                    break;
                case choiceVIP.LOGIN_INVESTOR:
                    this.inputAcountInvestor()
                    break;
                case choiceVIP.EXITS:
                    break;
            }
        } while (choice != choiceVIP.EXITS)
    }
}