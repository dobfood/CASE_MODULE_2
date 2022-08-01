"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractInvestors = void 0;
var readline = require("readline-sync");
var menuu_1 = require("../menu/menuu");
var callmenu_1 = require("../callmenu/callmenu");
var enum_1 = require("../enum/enum");
var menu = new menuu_1.Menuu();
var main = new callmenu_1.Callmenu();
var contractInvestors = /** @class */ (function () {
    function contractInvestors() {
    }
    contractInvestors.prototype.contractInvestor = function () {
        var choice;
        do {
            menu.menuContract();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case enum_1.choiceDAUS.SHOW_LIST:
                    main.showContractInvestor();
                    break;
                case enum_1.choiceDAUS.ADD_LIST:
                    main.addContractInvestor();
                    break;
                case enum_1.choiceDAUS.UPDATE_LIST:
                    main.updateContractInvestor();
                    break;
                case enum_1.choiceDAUS.DELETE_LIST:
                    main.deleteContractInvestor();
                    break;
                case enum_1.choiceDAUS.EXITS:
                    break;
            }
        } while (choice != enum_1.choiceDAUS.EXITS);
    };
    return contractInvestors;
}());
exports.contractInvestors = contractInvestors;
