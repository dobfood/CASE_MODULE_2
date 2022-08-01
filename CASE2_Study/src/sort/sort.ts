import * as readline from "readline-sync";
import {Menuu} from "../menu/menuu";
import {Callmenu} from "../callmenu/callmenu";
enum choices {
    ASCENDING = 1,
    DECREASE,
    EXITS=0
}
let menu = new Menuu()
let main = new Callmenu()
export class sort {

    changSalaryMenu() {
        let choice

        do {
            menu.menuSortChangePlayer()
            choice = +readline.question('Please enter : ')
            switch (choice) {
                case choices.ASCENDING:
                    main.sortPlayerSalaryAscending()
                    break;
                case choices.DECREASE :
                    main.sortPlayerSalaryDecrease()
                    break;
                case choices.EXITS:
                    break;
            }
        } while (choice != choices.EXITS)
    }
     changeSortAgeMenu() {
        let choice
        do {
            menu.menuSortChangePlayer()
            choice = +readline.question('Please enter : ')
            switch (choice) {
                case choices.ASCENDING:
                    main.sortPlayerAgeAscending()
                    break;
                case choices.DECREASE:
                    main.sortPlayerAgeDecrease()
                    break;
                case choices.EXITS:
                    break;
            }
        } while (choice != choices.EXITS)
    }

     changGoalsMenu() {
        let choice
        do {
            menu.menuSortChangePlayer()
            choice = +readline.question('Please enter : ')
            switch (choice) {
                case choices.ASCENDING:
                    main.sortPlayerGoalsAscending()
                    break;
                case choices.DECREASE:
                    main.sortPlayeGoalsDecrease()
                    break;

                case choices.EXITS:
                    break;
            }
        } while (choice != choices.EXITS)
    }

     changWeightMenu() {
        let choice
        do {
            menu.menuSortChangePlayer()
            choice = +readline.question('Please enter : ')
            switch (choice) {
                case choices.ASCENDING:
                    main.sortPlayerWeightAscending()
                    break;
                case choices.DECREASE:
                    main.sortPlayerWeightDecrease()
                    break;
                case choices.EXITS:
                    break;
            }
        } while (choice != choices.EXITS)
    }

     chanHeightMenu() {
        let choice
        do {
            menu.menuSortChangePlayer()
            choice = +readline.question('Please enter : ')
            switch (choice) {
                case choices.ASCENDING:
                    main.sortPlayerHeightAscending()
                    break;
                case choices.DECREASE:
                    main.sortPlayerHeightDecrease()
                    break;
                case choices.EXITS:
                    break;
            }
        } while (choice != choices.EXITS)
    }
}