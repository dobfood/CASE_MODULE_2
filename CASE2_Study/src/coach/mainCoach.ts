import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {Callmenu} from "../callmenu/callmenu";
import {choiceDAUS} from "../enum/enum"
import {contractsCoach} from "../coach_contract/coach_contract";
let contractsCoach1 = new contractsCoach()
let menu = new Menuu()
let main = new Callmenu()

function coach() {
    let choice

    do {
        menu.menuCoachManager()
        choice = +readline.question('Please enter : ')
        switch (choice) {
            case choiceDAUS.SHOW_LIST:
                main.showCoach()
                break;
            case choiceDAUS.ADD_LIST:
                main.addCoach()
                break;
            case choiceDAUS.UPDATE_LIST:
                main.updateCoach()
                break;
            case choiceDAUS.DELETE_LIST:
                main.deleteCoach()
                break;
            case 5:
                contractsCoach1.contractCoach()
                break;
            case choiceDAUS.EXITS :
                break;
        }
    } while (choice != choiceDAUS.EXITS)
}