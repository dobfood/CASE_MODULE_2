"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortPlayers = void 0;
var readline = require("readline-sync");
var menuu_1 = require("../menu/menuu");
var sort_1 = require("./sort");
var enum_1 = require("../enum/enum");
var menu = new menuu_1.Menuu();
var sort1 = new sort_1.sort();
var sortPlayers = /** @class */ (function () {
    function sortPlayers() {
    }
    sortPlayers.prototype.Sortplayer = function () {
        var choice;
        do {
            menu.menuSortPlayer();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case enum_1.choiceSorPlayers.SORT_AGE:
                    sort1.changeSortAgeMenu();
                    break;
                case enum_1.choiceSorPlayers.SORT_GOALS:
                    sort1.changGoalsMenu();
                    break;
                case enum_1.choiceSorPlayers.SORT_WEIGHT:
                    sort1.changWeightMenu();
                    break;
                case enum_1.choiceSorPlayers.SORT_HEIGHT:
                    sort1.chanHeightMenu();
                    break;
                case enum_1.choiceSorPlayers.SORT_SALARY:
                    sort1.changSalaryMenu();
                    break;
                case enum_1.choiceSorPlayers.EXITS:
                    break;
            }
        } while (choice != enum_1.choiceSorPlayers.EXITS);
    };
    return sortPlayers;
}());
exports.sortPlayers = sortPlayers;
