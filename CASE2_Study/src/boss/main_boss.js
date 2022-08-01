"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boss = void 0;
var readline = require("readline-sync");
var menuu_1 = require("../menu/menuu");
var enum_1 = require("../enum/enum");
var main_player_1 = require("./main_player");
var main_coach_1 = require("./main_coach");
var main_investor_1 = require("./main_investor");
var schedule_1 = require("../schedule/schedule");
var timetable_1 = require("../timetable/timetable");
var callmenu_1 = require("../callmenu/callmenu");
var menu = new menuu_1.Menuu();
var player = new main_player_1.main_player();
var coach = new main_coach_1.main_coach();
var investor = new main_investor_1.main_Investor();
var schedules = new schedule_1.schedule();
var timeTables = new timetable_1.timetable();
var main = new callmenu_1.Callmenu();
var boss = /** @class */ (function () {
    function boss() {
    }
    boss.prototype.Boss = function () {
        var choice;
        do {
            menu.menuManager();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case enum_1.choiceBoss.PLAYERS:
                    player.player();
                    break;
                case enum_1.choiceBoss.COACH:
                    coach.Coach();
                    break;
                case enum_1.choiceBoss.INVESTOR:
                    investor.investor();
                    break;
                case enum_1.choiceBoss.SCHEDULE:
                    schedules.scheduleManager();
                    break;
                case enum_1.choiceBoss.TIMETABLE:
                    timeTables.timeTable();
                    break;
                case enum_1.choiceBoss.FUND:
                    main.showFund();
                    break;
                case enum_1.choiceBoss.EXITS:
                    break;
            }
        } while (choice != enum_1.choiceBoss.EXITS);
    };
    return boss;
}());
exports.boss = boss;
