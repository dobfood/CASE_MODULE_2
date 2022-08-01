import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {Callmenu} from "../callmenu/callmenu";
import {choiceDAUS} from "../enum/enum";

let menu = new Menuu()
let main = new Callmenu()
export  class timetable {
    timeTable() {
        let choice
        do {
            menu.menuTimetable()
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case choiceDAUS.SHOW_LIST:
                    main.showTimetable()
                    break;
                case choiceDAUS.ADD_LIST:
                    main.addTimetable()
                    break;
                case choiceDAUS.UPDATE_LIST:
                    main.updateTimetable()
                    break;
                case choiceDAUS.DELETE_LIST:
                    main.deleteTimetable()
                    break;
                case choiceDAUS.EXITS:
                    break;
            }
        } while (choice != choiceDAUS.EXITS)
    }
}