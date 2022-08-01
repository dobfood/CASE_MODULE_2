"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timetable = void 0;
var readline = require("readline-sync");
var menuu_1 = require("../menu/menuu");
var callmenu_1 = require("../callmenu/callmenu");
var enum_1 = require("../enum/enum");
var menu = new menuu_1.Menuu();
var main = new callmenu_1.Callmenu();
var timetable = /** @class */ (function () {
    function timetable() {
    }
    timetable.prototype.timeTable = function () {
        var choice;
        do {
            menu.menuTimetable();
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case enum_1.choiceDAUS.SHOW_LIST:
                    main.showTimetable();
                    break;
                case enum_1.choiceDAUS.ADD_LIST:
                    main.addTimetable();
                    break;
                case enum_1.choiceDAUS.UPDATE_LIST:
                    main.updateTimetable();
                    break;
                case enum_1.choiceDAUS.DELETE_LIST:
                    main.deleteTimetable();
                    break;
                case enum_1.choiceDAUS.EXITS:
                    break;
            }
        } while (choice != enum_1.choiceDAUS.EXITS);
    };
    return timetable;
}());
exports.timetable = timetable;
