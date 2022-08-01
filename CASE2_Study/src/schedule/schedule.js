"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedule = void 0;
var readline = require("readline-sync");
var menuu_1 = require("../menu/menuu");
var callmenu_1 = require("../callmenu/callmenu");
var enum_1 = require("../enum/enum");
var menu = new menuu_1.Menuu();
var main = new callmenu_1.Callmenu();
var schedule = /** @class */ (function () {
    function schedule() {
    }
    schedule.prototype.scheduleManager = function () {
        var choice;
        do {
            menu.menuSchedule();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case enum_1.choiceDAUS.SHOW_LIST:
                    main.showSchedule();
                    break;
                case enum_1.choiceDAUS.ADD_LIST:
                    main.addSchedule();
                    break;
                case enum_1.choiceDAUS.UPDATE_LIST:
                    main.updateCoach();
                    break;
                case enum_1.choiceDAUS.DELETE_LIST:
                    main.deleteSchedule();
                    break;
                case enum_1.choiceDAUS.EXITS:
                    break;
            }
        } while (choice != enum_1.choiceDAUS.EXITS);
    };
    return schedule;
}());
exports.schedule = schedule;
