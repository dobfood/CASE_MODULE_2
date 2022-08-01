import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {Callmenu} from "../callmenu/callmenu";
import {choiceDAUS} from "../enum/enum";
let menu = new Menuu()
let main = new Callmenu()
export class contractsCoach {
    contractCoach() {
        let choice
        do {
            menu.menuContract()
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case choiceDAUS.SHOW_LIST:
                    main.showContractCoach()
                    break;
                case choiceDAUS.ADD_LIST:
                    main.addContractCoach()
                    break;
                case choiceDAUS.UPDATE_LIST:
                    main.updateContractCoach()
                    break;
                case choiceDAUS.DELETE_LIST:
                    main.deleteContractCoach()
                    break;
                case choiceDAUS.EXITS:
                    break;
            }
        } while (choice != choiceDAUS.EXITS)
    }
}
