import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {sort} from "./sort";
import {choiceSorPlayers} from "../enum/enum"
let menu = new Menuu()
let sort1 = new sort()
export class sortPlayers {
    Sortplayer() {
        let choice
        do {
            menu.menuSortPlayer()
            choice = +readline.question('Please enter : ');
            switch (choice) {
                case choiceSorPlayers.SORT_AGE :
                    sort1.changeSortAgeMenu()
                    break;
                case choiceSorPlayers.SORT_GOALS :
                    sort1.changGoalsMenu()
                    break;
                case choiceSorPlayers.SORT_WEIGHT :
                    sort1.changWeightMenu()
                    break;
                case choiceSorPlayers.SORT_HEIGHT :
                    sort1.chanHeightMenu()
                    break;
                case choiceSorPlayers.SORT_SALARY :
                    sort1.changSalaryMenu()
                    break;
                case choiceSorPlayers.EXITS:
                    break;
            }
        }
        while (choice != choiceSorPlayers.EXITS)
    }
}