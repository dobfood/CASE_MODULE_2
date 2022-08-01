import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {Callmenu} from "../callmenu/callmenu";
import {contractInvestors} from "../investor_contract/investor_contract";
import {choiceInvestor} from "../enum/enum";

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
                case choiceInvestor.SHOW_INVESTOR:
                    main.showInvestor();
                    break;
                case choiceInvestor.ADD_INVESTOR:
                    main.addInvestor();
                    break;
                case choiceInvestor.UPDATE_INVESTOR:
                    main.updateInvestor();
                    break;
                case choiceInvestor.DELETE_INVESTOR:
                    main.deleteInvestor();
                    break;
                case choiceInvestor.CONTRACT:
                    contractsInvestors.contractInvestor()
                    break;
                case choiceInvestor.PROFIT:
                    main.showAnnualProfit()
                    break;
                case choiceInvestor.EXITS:
                    break;
            }
        } while (choice != choiceInvestor.EXITS)
    }
}