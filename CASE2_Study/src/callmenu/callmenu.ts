import * as readline from "readline-sync";
import {Input} from "../input/Input";
import {Manager} from "../boss/Manager";
import {FootballPlayer} from "../football_player/FootballPlayer";
import {Coach} from "../coach/Coach";
import {Investor} from "../investor/Investor";
import {ContractCoach} from "../contract/contrach_coach";
import {ContractInvestor} from "../contract/contract_investor";
import {Week} from "../wooking_week/Workingweek";
let input = new Input()
let manager = new Manager()
let player1 = new FootballPlayer("ngoc",20,150,56,20,"Indonesia",2,1000)
let player2 = new FootballPlayer("Thao",40,160,70,35,"Thailand",5,500)
let player3 = new FootballPlayer("Tan",24,170,60,66,"Viet nam",77,1500)
let player4 = new FootballPlayer("Tuyen",49,180,20,88,"Brazil",99,1200)
let coach = new Coach("DragonDown",21,"4 Years")
let investor = new Investor("CoDeGym",8888,2,1000000,"hai phan tram")
let contractCoach1 = new ContractCoach("Thoi han 4 nam","1 thang 4000$")
let contractInvestor1 = new ContractInvestor("Thoi han 2 nam ","4%")
let timeTable = new Week("Luyen tap den chet","Nghi","Karaoke","Masage","Tap Gym den chet","Luyen tap sut bong bang tay ","Luyen tap bat bong bang chan")
let schedule1 = new Week("22/10/2023 : Giao huu Inter","23/10/2023 : Trong","24/10/2023 :Giao huu MU","25/10/2023: Trong","26/10/2023:Trong","27/10/2023:Chung ket Viet Nam","28/10/2023: Trong")
manager.addNewPlayer(player1)
manager.addNewPlayer(player2)
manager.addNewPlayer(player3)
manager.addNewPlayer(player4)
manager.addCoach(coach)
manager.addInvestor(investor)
manager.addContractCoach(contractCoach1)
manager.addContractInvestor(contractInvestor1)
manager.addNewTimeTable(timeTable)
manager.addNewSchedule(schedule1)
export class Callmenu {
    showPlayer() {
        console.log('-- Thong Tin Cau thu --')
        let player = manager.showAllPlayers()
        console.table(player)
    }
    addPlayer() {
        console.log('Them cau thu moi ')
        let player = input.inputPlayer()
        manager.addNewPlayer(player)
    }

    deletePlayer() {
        console.log('Xoa cau thu ')
        let index = +readline.question('Nhap vi tri muon xoa :')
        manager.deletePlayer(index)
    }

    updatePlayer() {
        console.log('Thay doi thong tin cau thu ')
        let index = +readline.question('Nhap vi tri muon xoa : ')
        let player = input.inputPlayer()
        manager.updatePlayer(index, player)
    }

    findPlayername() {
        console.log('Tim cau thu theo ten ')
        let name = readline.question('Ten cau thu : ')
        let player = manager.findPlayerName(name)
        console.log(player)
    }

    findPlayerAge() {
        console.log('Tim cau thu theo tuoi ')
        let age = +readline.question('Tuoi cau thu : ')
        let player = manager.findPlayerAge(age)
        console.log(`${player} Tuoi`)
    }

    findPlayerWeight() {
        console.log('Tim cau thu theo Can nang ')
        let weight = +readline.question('Can nang cau thu : ')
        let player = manager.findPlayerWeight(weight)
        console.log(`${player} Kg}`)
    }

    findPlayerHeight() {
        console.log('Tim cau thu theo chieu cao  ')
        let height = +readline.question('Chieu cao  cau thu : ')
        let player = manager.findPlayerHeight(height)
        console.log(`${player}`)
    }

    findPlayerNation() {
        console.log('Tim cau thu theo quoc tich ')
        let nation = readline.question('Quoc tich cau thu : ')
        let player = manager.findPlayerNations(nation)
        console.log(player)
    }

    findPlayerClothersnumber() {
        console.log('Tim cau thu theo so ao  ')
        let clothersnumber = +readline.question('So ao  cau thu : ')
        let player = manager.findPlayerClothersNumber(clothersnumber)
        console.log(` number ${player}`)
    }

    sortPlayerAgeAscending() {
        console.log('Sap xep tang dan')
        let player = manager.sortPlayersAgeAscending()
        console.table(player)
    }

    sortPlayerAgeDecrease() {
        console.log('Sap xep giam dan')
        let player = manager.sortPlayersAgeDecrease()
        console.table(player)
    }

    sortPlayerGoalsAscending() {
        console.log('Sap xep tang dan')
        let player = manager.sortPlayersGoalsAscending()
        console.table(player)
    }

    sortPlayeGoalsDecrease() {
        console.log('Sap xep tang dan')
        let player = manager.sortPlayersGoalsDecrease()
        console.table(player)
    }

    sortPlayerWeightAscending() {
        console.log('Sap xep tang dan')
        let player = manager.sortPlayersWeightAscending()
        console.table(player)
    }

    sortPlayerWeightDecrease() {
        console.log('Sap xep tang dan')
        let player = manager.sortPlayersWeightDecrease()
        console.table(player)
    }

    sortPlayerHeightAscending() {
        console.log('Sap xep tang dan')
        let player = manager.sortPlayersHeightAscending()
        console.table(player)
    }

    sortPlayerHeightDecrease() {
        console.log('Sap xep tang dan')
        let player = manager.sortPlayersHeightDecrease()
        console.table(player)
    }

    sortPlayerSalaryAscending() {
        console.log('Sap xep tang dan')
        let player = manager.sortPlayersSalaryAscending()
        console.table(player)
    }

    sortPlayerSalaryDecrease() {
        console.log('Sap xep tang dan')
        let player = manager.sortPlayersSalaryDecrease()
        console.table(player)
    }

    showTimetable(){
        let coach = manager.showTimeTable()
        console.table(coach)
    }

    addTimetable(){
        console.log('Them lich lam viec ')
        let player = input.inputWeek()
        manager.addNewTimeTable(player)
    }

    deleteTimetable() {
        console.log('Xoa lich lam viec ')
        let index = +readline.question('Nhap tuan muon xoa :')
        manager.deleteTimeTable(index)
    }

    updateTimetable() {
        console.log('Thay doi lich lam viec  ')
        let index = +readline.question('Nhap tuan muon thay doi  : ')
        let timetable = input.inputWeek()
        manager.updateTimeTable(index, timetable)
    }

    showSchedule() {
        console.log('Lich thi dau ')
        let managers = manager.showSchedule()
        console.table(managers)
    }

    addSchedule() {
        console.log('Them lich thi dau  ')
        let managers = input.inputWeek()
        manager.addNewSchedule(managers)
    }

    deleteSchedule() {
        console.log('Xoa lich lam viec ')
        let index = +readline.question('Nhap tuan muon xoa :')
        manager.deleteSchedule(index)
    }

    updateSchedule() {
        console.log('Thay doi lich lam viec  ')
        let index = +readline.question('Nhap tuan muon thay doi  : ')
        let schedule = input.inputWeek()
        manager.updateSchedule(index, schedule)
    }

    showContractCoach() {
        console.log('--Thoi han hop dong--')
        let contract = manager.showContractsCoach()
        console.table(contract)
    }

    addContractCoach() {
        console.log('Them hop dong HLV  ')
        let contractcoach = input.inputContractCoach()
        manager.addContractCoach(contractcoach)
    }

    deleteContractCoach() {
        console.log('Xoa lich lam viec ')
        let index = +readline.question('Nhap tuan muon xoa :')
        manager.deleteContractCoach(index)
    }

    updateContractCoach() {
        console.log('Thay doi lich lam viec  ')
        let index = +readline.question('Nhap tuan muon thay doi  : ')
        let coach = input.inputContractCoach()
        manager.updateContractCoach(index,coach)
    }

    showCoach() {
        console.log('--Thong Tin HLV --')
        let coach = manager.showCoach()
        console.table(coach)
    }

    addCoach() {
        console.log('Them HLV ')
        let coach = input.inputCoach()
        manager.addCoach(coach)
    }

    deleteCoach() {
        console.log('Xoa HLV ')
        let index = +readline.question('Nhap vi tri HLV muon xoa :')
        manager.deleteCoach(index)
    }

    updateCoach() {
        console.log('Thay doi thong tin HLV ')
        let index = +readline.question('Nhap vi tri HLV muon thay doi : ')
        let coach = input.inputCoach()
        manager.updateCoach(index, coach)
    }

    showContractInvestor() {
        console.log('--Thoi han hop dong voi nha dau tu--')
        let contract = manager.showContractsInvestor()
        console.table(contract)
    }

    addContractInvestor() {
        console.log('Them hop dong nha dau tu  ')
        let contractinvestor = input.inputContracInvestor()
        manager.addContractInvestor(contractinvestor)
    }

    deleteContractInvestor() {
        console.log('Xoa lich lam viec ')
        let index = +readline.question('Nhap tuan muon xoa :')
        manager.deleteContractInvestor(index)
    }

    updateContractInvestor() {
        console.log('Thay doi lich lam viec  ')
        let index = +readline.question('Nhap tuan muon thay doi  : ')
        let investor = input.inputContracInvestor()
        manager.updateContractInvestor(index, investor)
    }

    showInvestor() {
        console.log('--Thong tin nha dau tu--');
        let investor = manager.showInvestor()
        console.table(investor)
    }

    addInvestor() {
        console.log('Them nha dau tu ')
        let investor = input.inputInvestor()
        manager.addInvestor(investor)
    }

    updateInvestor() {
        console.log('Thay doi thong tin nha dau tu ');
        let index = +readline.question('Nhap vi tri nha dau tu muon thay doi :');
        let investor = input.inputInvestor()
        manager.updateInvestor(index, investor)
    }

    deleteInvestor() {
        console.log('Xoa nha dau tu ');
        let index = +readline.question('Nhap vi tri nha dau tu muon xoa : ')
        manager.deleteInvestor(index)
    }
    showFund(){
        console.log('Quy Cau Lac Bo')
        let fund= manager.allFund()
        console.table(fund)
    }


}
