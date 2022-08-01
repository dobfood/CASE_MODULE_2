import {Coach} from "../coach/Coach";
import {Week} from "../wooking_week/Workingweek";
import {FootballPlayer} from "../football_player/FootballPlayer";
import {Investor} from "../investor/Investor";
import {ContractInvestor} from "../contract/contract_investor";
import {ContractCoach} from "../contract/contrach_coach";

export class Manager {
    static managerplayer: FootballPlayer[] = [];
    private static managercalendar: Week[] = [];
    private static managercoach: Coach[] = [];
    private static managerinvestors: Investor[] = [];
    private static managercontractcoach: ContractCoach[] = [];
    private static managercontractinvestor: ContractInvestor[] = [];
    public timetableweek: any[] = []

    constructor() {

    }

    showAllPlayers(): FootballPlayer[] {
        return Manager.managerplayer
    }

    addNewPlayer(player: FootballPlayer) {
        Manager.managerplayer.push(player);
    }

    updatePlayer(value: number, player: FootballPlayer): void {
        Manager.managerplayer[value] = player;
    }

    deletePlayer(value: number): void {
        Manager.managerplayer.splice(value, 1);
    }

    findPlayerName(name: string) {
        let index = -1
        let flag: number = 0
        Manager.managerplayer.forEach((value, index) => {
            if (value.name == name) {
                console.table(Manager.managerplayer[index]);
                flag++
            }
        })
        if (index == -1) {
            return
        }
    }

    findPlayerAge(age: number) {
        let index = -1
        let flag: number = 0
        Manager.managerplayer.forEach((value, index) => {
            if (value.age == age) {
                console.table(Manager.managerplayer[index]);
                flag++
            }
        })
        if (index == -1) {
            return
        }
    }

    findPlayerHeight(height: number) {
        let index = -1
        let flag: number = 0
        Manager.managerplayer.forEach((value, index) => {
            if (value.height == height) {
                console.table(Manager.managerplayer[index]);
                flag++
            }
        })
        if (index == -1) {
            return
        }
    }

    findPlayerWeight(weight: number) {
        let index = -1
        let flag: number = 0
        Manager.managerplayer.forEach((value, index) => {
            if (value.weight == weight) {
                console.table(Manager.managerplayer[index]);
                flag++
            }
        })
        if (index == -1) {
            return
        }
    }

    findPlayerClothersNumber(clothersnumber: number) {
        let index = -1
        let flag: number = 0
        Manager.managerplayer.forEach((value, index) => {
            if (value.clothersnumber == clothersnumber) {
                console.table(Manager.managerplayer[index]);
                flag++
            }
        })
        if (index == -1) {
            return
        }
    }

    findPlayerNations(nations: string) {
        let index = -1
        let flag: number = 0
        Manager.managerplayer.forEach((value, index) => {
            if (value.nation == nations) {
                console.table(Manager.managerplayer[index]);
                flag++
            }
        })
        if (index == -1) {
            return
        }
    }

    swap(j: number) {
        let temp = Manager.managerplayer[j]
        Manager.managerplayer[j] = Manager.managerplayer[j + 1]
        Manager.managerplayer[j + 1] = temp
    }

    sortPlayersAgeAscending() {
        let n = Manager.managerplayer.length
        for (let i = 1; i < n; i++) {
            let key = Manager.managerplayer[i].age
            let j = i - 1
            while (j >= 0 && Manager.managerplayer[j].age > key) {

                this.swap(j)
                j = j - 1;
            }
            Manager.managerplayer[j + 1].age = key
        }
        return Manager.managerplayer
    }

    sortPlayersAgeDecrease() {
        let n = Manager.managerplayer.length
        for (let i = 1; i < n; i++) {
            let key = Manager.managerplayer[i].age
            let j = i - 1
            while (j >= 0 && Manager.managerplayer[j].age < key) {

                this.swap(j)
                j = j - 1;
            }
            Manager.managerplayer[j + 1].age = key
        }
        return Manager.managerplayer
    }

    sortPlayersGoalsAscending() {
        let n = Manager.managerplayer.length
        for (let i = 1; i < n; i++) {
            let key = Manager.managerplayer[i].numbergoals
            let j = i - 1
            while (j >= 0 && Manager.managerplayer[j].numbergoals > key) {

                this.swap(j)
                j = j - 1;
            }
            Manager.managerplayer[j + 1].numbergoals = key
        }
        return Manager.managerplayer
    }

    sortPlayersGoalsDecrease() {
        let n = Manager.managerplayer.length
        for (let i = 1; i < n; i++) {
            let key = Manager.managerplayer[i].numbergoals
            let j = i - 1
            while (j >= 0 && Manager.managerplayer[j].numbergoals < key) {

                this.swap(j)
                j = j - 1;
            }
            Manager.managerplayer[j + 1].numbergoals = key
        }
        return Manager.managerplayer
    }

    sortPlayersWeightAscending() {
        let n = Manager.managerplayer.length
        for (let i = 1; i < n; i++) {
            let key = Manager.managerplayer[i].weight
            let j = i - 1
            while (j >= 0 && Manager.managerplayer[j].weight > key) {

                this.swap(j)
                j = j - 1;
            }
            Manager.managerplayer[j + 1].weight = key
        }
        return Manager.managerplayer
    }

    sortPlayersWeightDecrease() {
        let n = Manager.managerplayer.length
        for (let i = 1; i < n; i++) {
            let key = Manager.managerplayer[i].weight
            let j = i - 1
            while (j >= 0 && Manager.managerplayer[j].weight < key) {

                this.swap(j)
                j = j - 1;
            }
            Manager.managerplayer[j + 1].weight = key
        }
        return Manager.managerplayer
    }

    sortPlayersHeightAscending() {
        let n = Manager.managerplayer.length
        for (let i = 1; i < n; i++) {
            let key = Manager.managerplayer[i].height
            let j = i - 1
            while (j >= 0 && Manager.managerplayer[j].height > key) {

                this.swap(j)
                j = j - 1;
            }
            Manager.managerplayer[j + 1].height = key
        }
        return Manager.managerplayer
    }

    sortPlayersHeightDecrease() {
        let n = Manager.managerplayer.length
        for (let i = 1; i < n; i++) {
            let key = Manager.managerplayer[i].height
            let j = i - 1
            while (j >= 0 && Manager.managerplayer[j].height < key) {

                this.swap(j)
                j = j - 1;
            }
            Manager.managerplayer[j + 1].height = key
        }
        return Manager.managerplayer
    }

    sortPlayersSalaryAscending() {
        let n = Manager.managerplayer.length
        for (let i = 1; i < n; i++) {
            let key = Manager.managerplayer[i].salary
            let j = i - 1
            while (j >= 0 && Manager.managerplayer[j].salary > key) {

                this.swap(j)
                j = j - 1;
            }
            Manager.managerplayer[j + 1].salary = key
        }
        return Manager.managerplayer
    }

    sortPlayersSalaryDecrease() {
        let n = Manager.managerplayer.length
        for (let i = 1; i < n; i++) {
            let key = Manager.managerplayer[i].salary
            let j = i - 1
            while (j >= 0 && Manager.managerplayer[j].salary < key) {

                this.swap(j)
                j = j - 1;
            }
            Manager.managerplayer[j + 1].salary = key
        }
        return Manager.managerplayer
    }

    addNewTimeTable(timetable: Week): void {
        this.timetableweek.push(timetable)
    }

    updateTimeTable(value: number, timetable: Week) {
        Manager.managercalendar[value] = timetable
    }

    deleteTimeTable(value: number): void {
        Manager.managercalendar.splice(value, 1)
    }

    showTimeTable() {

        return this.timetableweek
    }

    addNewSchedule(schedule: Week): void {
        Manager.managercalendar.push(schedule)
    }

    updateSchedule(value: number, schedule: Week) {
        Manager.managercalendar[value] = schedule
    }

    deleteSchedule(value: number): void {
        Manager.managercalendar.splice(value, 1)
    }

    showSchedule() {
        return Manager.managercalendar
    }

    addCoach(coach: Coach): void {
        Manager.managercoach.push(coach);
    }

    updateCoach(value: number, coach: Coach): void {
        Manager.managercoach[value] = coach
    }

    deleteCoach(index: number): void {
        Manager.managercoach.splice(index, 1)
    }

    showCoach(): Coach[] {
        return Manager.managercoach
    }

    showContractsCoach(): ContractCoach[] {
        return Manager.managercontractcoach
    }

    addContractCoach(contractcoach: ContractCoach): void {
        Manager.managercontractcoach.push(contractcoach);
    }

    updateContractCoach(index: number, contractcoach: ContractCoach): void {
        Manager.managercontractcoach[index] = contractcoach
    }

    deleteContractCoach(index: number): void {
        Manager.managercontractcoach.splice(index, 1)
    }

    showInvestor(): Investor[] {
        return Manager.managerinvestors
    }

    addInvestor(investor: Investor): void {
        Manager.managerinvestors.push(investor)
    }

    updateInvestor(index: number, investor: Investor): void {
        Manager.managerinvestors[index] = investor
    }

    deleteInvestor(index: number): void {
        Manager.managerinvestors.splice(index, 1)
    }

    showContractsInvestor(): ContractInvestor[] {
        return Manager.managercontractinvestor
    }

    addContractInvestor(contractinvestor: ContractInvestor): void {
        Manager.managercontractinvestor.push(contractinvestor)
    }

    updateContractInvestor(index: number, contractinvestor: ContractInvestor): void {
        Manager.managercontractinvestor[index] = contractinvestor
    }

    deleteContractInvestor(index: number): void {
        Manager.managercontractinvestor.splice(index, 1)
    }

    annualProfit(id: number): number {
        let value = Manager.managercontractinvestor.findIndex((item) => {
            return (item._investor._id == id)
        })
        if (value == -1) {
            return -1
        } else {
            let profit = 1
            // console.log(Manager.managercontractinvestor[value]._annualprofit);
            console.table(Manager.managercontractinvestor[value])
            // console.log(value)
            profit = (((Manager.managercontractinvestor[value]._investor.investmentamount) * (Manager.managercontractinvestor[value].annualprofit)) / 100)
            return profit
        }
    }
}