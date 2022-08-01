import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {Callmenu} from "../callmenu/callmenu";
import {choiceCoach} from "../enum/enum";
import {findPlayer} from "../find/find";
import {sortPlayers} from "../sort/sortPlayer";
let menu = new Menuu();
let main = new Callmenu();
let findPlayers = new findPlayer()
let sortPlayer = new sortPlayers();
export class main_coach{
     Coach() {
        let choice
        do {
            menu.menuCoach()
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case choiceCoach.SHOW_PLAYERS:
                    main.showPlayer()
                    break;
                case choiceCoach.FIND_PLAYERS:
                    findPlayers.Findplayer()
                    break;
                case choiceCoach.SORT_PLAYERS :
                    sortPlayer.Sortplayer()
                    break;
                case choiceCoach.TIMETABLE:
                    main.showTimetable()
                    break;
                case choiceCoach.SCHEDULE:
                    main.showSchedule()
                    break;
                case choiceCoach.CONTRACT_COACH:
                    main.showContractCoach()
                    break;
                case choiceCoach.EXITS:
                    break;
            }
        } while (choice != choiceCoach.EXITS)
    }
}