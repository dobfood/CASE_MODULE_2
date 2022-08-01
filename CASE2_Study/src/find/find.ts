import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {Callmenu} from "../callmenu/callmenu";
import {choiceFindPlayers} from "../enum/enum";

let menu = new Menuu()
let main = new Callmenu()
export class findPlayer {
    Findplayer() {
        let choice
        do {
            menu.menuFindPlayers()
            choice = +readline.question('Please Enter :');
            switch (choice) {
                case choiceFindPlayers.FIND_NAME:
                    main.findPlayername()
                    break;
                case choiceFindPlayers.FIND_AGE:
                    main.findPlayerAge()
                    break;
                case choiceFindPlayers.FIND_WEIGHT:
                    main.findPlayerWeight()
                    break;
                case choiceFindPlayers.FIND_HEIGHT:
                    main.findPlayerHeight()
                    break;
                case choiceFindPlayers.FIND_NATION:
                    main.findPlayerNation()
                    break;
                case choiceFindPlayers.FIND_CLOTHERSNUMBER:
                    main.findPlayerClothersnumber()
                    break;
                case choiceFindPlayers.EXITS:
                    break
            }
        } while (choice != choiceFindPlayers.EXITS)
    }
}