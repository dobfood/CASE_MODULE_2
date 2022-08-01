"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPlayer = void 0;
var readline = require("readline-sync");
var menuu_1 = require("../menu/menuu");
var callmenu_1 = require("../callmenu/callmenu");
var enum_1 = require("../enum/enum");
var menu = new menuu_1.Menuu();
var main = new callmenu_1.Callmenu();
var findPlayer = /** @class */ (function () {
    function findPlayer() {
    }
    findPlayer.prototype.Findplayer = function () {
        var choice;
        do {
            menu.menuFindPlayers();
            choice = +readline.question('Please Enter :');
            switch (choice) {
                case enum_1.choiceFindPlayers.FIND_NAME:
                    main.findPlayername();
                    break;
                case enum_1.choiceFindPlayers.FIND_AGE:
                    main.findPlayerAge();
                    break;
                case enum_1.choiceFindPlayers.FIND_WEIGHT:
                    main.findPlayerWeight();
                    break;
                case enum_1.choiceFindPlayers.FIND_HEIGHT:
                    main.findPlayerHeight();
                    break;
                case enum_1.choiceFindPlayers.FIND_NATION:
                    main.findPlayerNation();
                    break;
                case enum_1.choiceFindPlayers.FIND_CLOTHERSNUMBER:
                    main.findPlayerClothersnumber();
                    break;
                case enum_1.choiceFindPlayers.EXITS:
                    break;
            }
        } while (choice != enum_1.choiceFindPlayers.EXITS);
    };
    return findPlayer;
}());
exports.findPlayer = findPlayer;
