"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main_Investor = void 0;
var readline = require("readline-sync");
var menuu_1 = require("../menu/menuu");
var callmenu_1 = require("../callmenu/callmenu");
var investor_contract_1 = require("../investor_contract/investor_contract");
var enum_1 = require("../enum/enum");
var menu = new menuu_1.Menuu();
var main = new callmenu_1.Callmenu();
var contractsInvestors = new investor_contract_1.contractInvestors();
var main_Investor = /** @class */ (function () {
    function main_Investor() {
    }
    main_Investor.prototype.investor = function () {
        var choice;
        do {
            menu.menuInvestorManager();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case enum_1.choiceDAUS.SHOW_LIST:
                    main.showInvestor();
                    break;
                case enum_1.choiceDAUS.ADD_LIST:
                    main.addInvestor();
                    break;
                case enum_1.choiceDAUS.UPDATE_LIST:
                    main.updateInvestor();
                    break;
                case enum_1.choiceDAUS.DELETE_LIST:
                    main.deleteInvestor();
                    break;
                case 5:
                    contractsInvestors.contractInvestor();
                    break;
                case 6:
                    main.showAnnualProfit();
                    break;
                case enum_1.choiceDAUS.EXITS:
                    break;
            }
        } while (choice != enum_1.choiceDAUS.EXITS);
    };
    return main_Investor;
}());
exports.main_Investor = main_Investor;
