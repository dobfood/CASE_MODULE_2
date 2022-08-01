"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main_coach = void 0;
var readline = require("readline-sync");
var menuu_1 = require("../menu/menuu");
var callmenu_1 = require("../callmenu/callmenu");
var enum_1 = require("../enum/enum");
var find_1 = require("../find/find");
var sortPlayer_1 = require("../sort/sortPlayer");
var menu = new menuu_1.Menuu();
var main = new callmenu_1.Callmenu();
var findPlayers = new find_1.findPlayer();
var sortPlayer = new sortPlayer_1.sortPlayers();
var main_coach = /** @class */ (function () {
    function main_coach() {
    }
    main_coach.prototype.Coach = function () {
        var choice;
        do {
            menu.menuCoach();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case enum_1.choiceCoach.SHOW_PLAYERS:
                    main.showPlayer();
                    break;
                case enum_1.choiceCoach.FIND_PLAYERS:
                    findPlayers.Findplayer();
                    break;
                case enum_1.choiceCoach.SORT_PLAYERS:
                    sortPlayer.Sortplayer();
                    break;
                case enum_1.choiceCoach.TIMETABLE:
                    main.showTimetable();
                    break;
                case enum_1.choiceCoach.SCHEDULE:
                    main.showSchedule();
                    break;
                case enum_1.choiceCoach.CONTRACT_COACH:
                    main.showContractCoach();
                    break;
                case enum_1.choiceCoach.EXITS:
                    break;
            }
        } while (choice != enum_1.choiceCoach.EXITS);
    };
    return main_coach;
}());
exports.main_coach = main_coach;
