import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {Callmenu} from "../callmenu/callmenu";
import {contractInvestors} from "../investor_contract/investor_contract";
import {choiceDAUS} from "../enum/enum";

let menu = new Menuu()
let main = new Callmenu()
let contractsInvestors = new contractInvestors()

export class main_Investor {

    investor() {
        let choice

        do {
            menu.menuInvestorManager()
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case choiceDAUS.SHOW_LIST:
                    main.showInvestor();
                    break;
                case choiceDAUS.ADD_LIST:
                    main.addInvestor();
                    break;
                case choiceDAUS.UPDATE_LIST:
                    main.updateInvestor();
                    break;
                case choiceDAUS.DELETE_LIST:
                    main.deleteInvestor();
                    break;
                case 5:
                    contractsInvestors.contractInvestor()
                    break;
                case 6 :
                    console.log('Loi nhuan cua nha dau tu ');
                    break;
                case choiceDAUS.EXITS:
                    break;
            }
        } while (choice != choiceDAUS.EXITS)
    }
}