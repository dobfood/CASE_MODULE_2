import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {Callmenu} from "../callmenu/callmenu";
import {choiceDAUS} from "../enum/enum";

let menu = new Menuu()
let main = new Callmenu()
export class main_player {
    player() {
        let choice

        do {
            menu.menuPlayerManager()
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case choiceDAUS.SHOW_LIST :
                    main.showPlayer();
                    break;
                case choiceDAUS.ADD_LIST:
                    main.addPlayer();
                    break;
                case choiceDAUS.UPDATE_LIST:
                    main.updatePlayer();
                    break;
                case choiceDAUS.DELETE_LIST:
                    main.deletePlayer();
                    break;
                case 5:
                    main.showTimetable()
                    break;
                case choiceDAUS.EXITS :
                    break;
            }
        } while (choice != choiceDAUS.EXITS)
    }
}