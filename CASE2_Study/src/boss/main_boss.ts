import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {choiceBoss} from "../enum/enum";
import {main_player} from "./main_player";
import {main_coach} from "./main_coach";
import {main_Investor} from "./main_investor";
import {schedule} from "../schedule/schedule";
import {timetable} from "../timetable/timetable";
import {Callmenu} from "../callmenu/callmenu";

let menu = new Menuu()
let player = new main_player()
let coach = new main_coach()
let investor = new main_Investor()
let schedules = new schedule()
let timeTables = new timetable()
export class boss{
     Boss() {
        let choice
        do {
            menu.menuManager()
            choice = +readline.question('Please enter : ')
            switch (choice) {
                case choiceBoss.PLAYERS:
                    player.player()
                    break;
                case choiceBoss.COACH:
                    coach.Coach()
                    break;
                case choiceBoss.INVESTOR:
                    investor.investor()
                    break;
                case choiceBoss.SCHEDULE:
                    schedules.scheduleManager()
                    break;
                case choiceBoss.TIMETABLE:
                    timeTables.timeTable()
                    break;
                case choiceBoss.EXITS:
                    break
            }
        } while (choice != choiceBoss.EXITS)
    }
}