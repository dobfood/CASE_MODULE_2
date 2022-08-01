import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {Callmenu} from "../callmenu/callmenu";
import {choicePlayers} from "../enum/enum";
let menu = new Menuu()
let main = new Callmenu()

export class player {
    Player() {
        let choice
        do {
            menu.menuPlayer()
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case choicePlayers.SHOW_COACH:
                    main.showCoach()
                    break;
                case choicePlayers.SCHEDULE:
                    main.showSchedule()
                    break;
                case choicePlayers.TIMETABLE:
                    main.showTimetable()
                    break;
                case choicePlayers.EXITS:
                    break;
            }
        } while (choice != choicePlayers.EXITS)
    }
}