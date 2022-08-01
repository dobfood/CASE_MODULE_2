import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {Callmenu} from "../callmenu/callmenu";
import {choiceDAUS} from "../enum/enum";

let menu = new Menuu()
let main = new Callmenu()
export class schedule{
    scheduleManager() {
        let choice
        do {
            menu.menuSchedule()
            choice = +readline.question('Please enter : ')
            switch (choice) {
                case choiceDAUS.SHOW_LIST:
                    main.showSchedule()
                    break;
                case choiceDAUS.ADD_LIST:
                    main.addSchedule()
                    break;
                case choiceDAUS.UPDATE_LIST:
                    main.updateSchedule()
                    break;
                case choiceDAUS.DELETE_LIST:
                    main.deleteSchedule()
                    break;
                case choiceDAUS.EXITS:
                    break;
            }
        } while (choice != choiceDAUS.EXITS)
    }
}