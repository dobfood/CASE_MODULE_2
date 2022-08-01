import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {Callmenu} from "../callmenu/callmenu";
import {choiceDAUS} from "../enum/enum";

let menu = new Menuu()
let main = new Callmenu()


export class contractInvestors {
    contractInvestor() {
        let choice;
        do {
            menu.menuContract()
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case choiceDAUS.SHOW_LIST:
                    main.showContractInvestor()
                    break;
                case choiceDAUS.ADD_LIST:
                    main.addContractInvestor()
                    break;
                case choiceDAUS.UPDATE_LIST:
                    main.updateContractInvestor()
                    break;
                case choiceDAUS.DELETE_LIST:
                    main.deleteContractInvestor()
                    break;
                case choiceDAUS.EXITS:
                    break;
            }
        } while (choice != choiceDAUS.EXITS)
    }
}