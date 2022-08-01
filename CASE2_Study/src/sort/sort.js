"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
var readline = require("readline-sync");
var menuu_1 = require("../menu/menuu");
var callmenu_1 = require("../callmenu/callmenu");
var choices;
(function (choices) {
    choices[choices["ASCENDING"] = 1] = "ASCENDING";
    choices[choices["DECREASE"] = 2] = "DECREASE";
    choices[choices["EXITS"] = 0] = "EXITS";
})(choices || (choices = {}));
var menu = new menuu_1.Menuu();
var main = new callmenu_1.Callmenu();
var sort = /** @class */ (function () {
    function sort() {
    }
    sort.prototype.changSalaryMenu = function () {
        var choice;
        do {
            menu.menuSortChangePlayer();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case choices.ASCENDING:
                    main.sortPlayerSalaryAscending();
                    break;
                case choices.DECREASE:
                    main.sortPlayerSalaryDecrease();
                    break;
                case choices.EXITS:
                    break;
            }
        } while (choice != choices.EXITS);
    };
    sort.prototype.changeSortAgeMenu = function () {
        var choice;
        do {
            menu.menuSortChangePlayer();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case choices.ASCENDING:
                    main.sortPlayerAgeAscending();
                    break;
                case choices.DECREASE:
                    main.sortPlayerAgeDecrease();
                    break;
                case choices.EXITS:
                    break;
            }
        } while (choice != choices.EXITS);
    };
    sort.prototype.changGoalsMenu = function () {
        var choice;
        do {
            menu.menuSortChangePlayer();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case choices.ASCENDING:
                    main.sortPlayerGoalsAscending();
                    break;
                case choices.DECREASE:
                    main.sortPlayeGoalsDecrease();
                    break;
                case choices.EXITS:
                    break;
            }
        } while (choice != choices.EXITS);
    };
    sort.prototype.changWeightMenu = function () {
        var choice;
        do {
            menu.menuSortChangePlayer();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case choices.ASCENDING:
                    main.sortPlayerWeightAscending();
                    break;
                case choices.DECREASE:
                    main.sortPlayerWeightDecrease();
                    break;
                case choices.EXITS:
                    break;
            }
        } while (choice != choices.EXITS);
    };
    sort.prototype.chanHeightMenu = function () {
        var choice;
        do {
            menu.menuSortChangePlayer();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case choices.ASCENDING:
                    main.sortPlayerHeightAscending();
                    break;
                case choices.DECREASE:
                    main.sortPlayerHeightDecrease();
                    break;
                case choices.EXITS:
                    break;
            }
        } while (choice != choices.EXITS);
    };
    return sort;
}());
exports.sort = sort;
