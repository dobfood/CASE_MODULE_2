"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main_player = void 0;
var readline = require("readline-sync");
var menuu_1 = require("../menu/menuu");
var callmenu_1 = require("../callmenu/callmenu");
var enum_1 = require("../enum/enum");
var menu = new menuu_1.Menuu();
var main = new callmenu_1.Callmenu();
var main_player = /** @class */ (function () {
    function main_player() {
    }
    main_player.prototype.player = function () {
        var choice;
        do {
            menu.menuPlayerManager();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case enum_1.choiceDAUS.SHOW_LIST:
                    main.showPlayer();
                    break;
                case enum_1.choiceDAUS.ADD_LIST:
                    main.addPlayer();
                    break;
                case enum_1.choiceDAUS.UPDATE_LIST:
                    main.updatePlayer();
                    break;
                case enum_1.choiceDAUS.DELETE_LIST:
                    main.deletePlayer();
                    break;
                case 5:
                    main.showTimetable();
                    break;
                case enum_1.choiceDAUS.EXITS:
                    break;
            }
        } while (choice != enum_1.choiceDAUS.EXITS);
    };
    return main_player;
}());
exports.main_player = main_player;
