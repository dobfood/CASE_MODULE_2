import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {Callmenu} from "../callmenu/callmenu";
let menu = new Menuu();
let main = new Callmenu()
function Investor() {
    let choice
    do {
        menu.menuInvestor()
        choice = +readline.question('Please enter : ');
        switch (choice) {
            case 1:
                main.showPlayer()
                break;
            case 2:
                main.showCoach()
                break;
            case 0:
                break;
        }
    } while (choice != 0)
}