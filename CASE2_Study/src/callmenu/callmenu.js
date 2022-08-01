"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Callmenu = void 0;
var readline = require("readline-sync");
var Input_1 = require("../input/Input");
var Manager_1 = require("../boss/Manager");
var FootballPlayer_1 = require("../football_player/FootballPlayer");
var Coach_1 = require("../coach/Coach");
var Investor_1 = require("../investor/Investor");
var contrach_coach_1 = require("../contract/contrach_coach");
var contract_investor_1 = require("../contract/contract_investor");
var Workingweek_1 = require("../wooking_week/Workingweek");
var input = new Input_1.Input();
var manager = new Manager_1.Manager();
var player1 = new FootballPlayer_1.FootballPlayer("ngoc", 20, 150, 56, 20, "Indonesia", 2, 1000);
var player2 = new FootballPlayer_1.FootballPlayer("Thao", 40, 160, 70, 35, "Thailand", 5, 500);
var player3 = new FootballPlayer_1.FootballPlayer("Tan", 24, 170, 60, 66, "Viet nam", 77, 1500);
var player4 = new FootballPlayer_1.FootballPlayer("Tuyen", 49, 180, 20, 88, "Brazil", 99, 1200);
var coach = new Coach_1.Coach("DragonDown", 21, "4 Years");
var investor = new Investor_1.Investor("CoDeGym", 8888, 30, 10000000);
var contractCoach1 = new contrach_coach_1.ContractCoach("Thoi han 4 nam", " 12000$/year");
var contractInvestor1 = new contract_investor_1.ContractInvestor("Thoi han 2 nam ", 20, investor);
var timeTable = new Workingweek_1.Week("Luyen tap den chet", "Nghi", "Karaoke", "Masage", "Tap Gym den chet", "Luyen tap sut bong bang tay ", "Luyen tap bat bong bang chan");
var schedule1 = new Workingweek_1.Week("22/10/2023 : Giao huu Inter", "23/10/2023 : Trong", "24/10/2023 :Giao huu MU", "25/10/2023: Trong", "26/10/2023:Trong", "27/10/2023:Chung ket Viet Nam", "28/10/2023: Trong");
manager.addNewPlayer(player1);
manager.addNewPlayer(player2);
manager.addNewPlayer(player3);
manager.addNewPlayer(player4);
manager.addCoach(coach);
manager.addInvestor(investor);
manager.addContractCoach(contractCoach1);
manager.addContractInvestor(contractInvestor1);
manager.addNewTimeTable(timeTable);
manager.addNewSchedule(schedule1);
var Callmenu = /** @class */ (function () {
    function Callmenu() {
    }
    Callmenu.prototype.showPlayer = function () {
        console.log('-- Thong Tin Cau thu --');
        var player = manager.showAllPlayers();
        console.table(player);
    };
    Callmenu.prototype.addPlayer = function () {
        console.log('Them cau thu moi ');
        var player = input.inputPlayer();
        manager.addNewPlayer(player);
    };
    Callmenu.prototype.deletePlayer = function () {
        console.log('Xoa cau thu ');
        var index = +readline.question('Nhap vi tri muon xoa :');
        manager.deletePlayer(index);
    };
    Callmenu.prototype.updatePlayer = function () {
        console.log('Thay doi thong tin cau thu ');
        var index = +readline.question('Nhap vi tri muon xoa : ');
        var player = input.inputPlayer();
        manager.updatePlayer(index, player);
    };
    Callmenu.prototype.findPlayername = function () {
        console.log('Tim cau thu theo ten ');
        var name = readline.question('Ten cau thu : ');
        var player = manager.findPlayerName(name);
        console.log(player);
    };
    Callmenu.prototype.findPlayerAge = function () {
        console.log('Tim cau thu theo tuoi ');
        var age = +readline.question('Tuoi cau thu : ');
        var player = manager.findPlayerAge(age);
        console.log("".concat(player, " Tuoi"));
    };
    Callmenu.prototype.findPlayerWeight = function () {
        console.log('Tim cau thu theo Can nang ');
        var weight = +readline.question('Can nang cau thu : ');
        var player = manager.findPlayerWeight(weight);
        console.log("".concat(player, " Kg}"));
    };
    Callmenu.prototype.findPlayerHeight = function () {
        console.log('Tim cau thu theo chieu cao  ');
        var height = +readline.question('Chieu cao  cau thu : ');
        var player = manager.findPlayerHeight(height);
        console.log("".concat(player));
    };
    Callmenu.prototype.findPlayerNation = function () {
        console.log('Tim cau thu theo quoc tich ');
        var nation = readline.question('Quoc tich cau thu : ');
        var player = manager.findPlayerNations(nation);
        console.log(player);
    };
    Callmenu.prototype.findPlayerClothersnumber = function () {
        console.log('Tim cau thu theo so ao  ');
        var clothersnumber = +readline.question('So ao  cau thu : ');
        var player = manager.findPlayerClothersNumber(clothersnumber);
        console.log(" number ".concat(player));
    };
    Callmenu.prototype.sortPlayerAgeAscending = function () {
        console.log('Sap xep tang dan');
        var player = manager.sortPlayersAgeAscending();
        console.table(player);
    };
    Callmenu.prototype.sortPlayerAgeDecrease = function () {
        console.log('Sap xep giam dan');
        var player = manager.sortPlayersAgeDecrease();
        console.table(player);
    };
    Callmenu.prototype.sortPlayerGoalsAscending = function () {
        console.log('Sap xep tang dan');
        var player = manager.sortPlayersGoalsAscending();
        console.table(player);
    };
    Callmenu.prototype.sortPlayeGoalsDecrease = function () {
        console.log('Sap xep tang dan');
        var player = manager.sortPlayersGoalsDecrease();
        console.table(player);
    };
    Callmenu.prototype.sortPlayerWeightAscending = function () {
        console.log('Sap xep tang dan');
        var player = manager.sortPlayersWeightAscending();
        console.table(player);
    };
    Callmenu.prototype.sortPlayerWeightDecrease = function () {
        console.log('Sap xep tang dan');
        var player = manager.sortPlayersWeightDecrease();
        console.table(player);
    };
    Callmenu.prototype.sortPlayerHeightAscending = function () {
        console.log('Sap xep tang dan');
        var player = manager.sortPlayersHeightAscending();
        console.table(player);
    };
    Callmenu.prototype.sortPlayerHeightDecrease = function () {
        console.log('Sap xep tang dan');
        var player = manager.sortPlayersHeightDecrease();
        console.table(player);
    };
    Callmenu.prototype.sortPlayerSalaryAscending = function () {
        console.log('Sap xep tang dan');
        var player = manager.sortPlayersSalaryAscending();
        console.table(player);
    };
    Callmenu.prototype.sortPlayerSalaryDecrease = function () {
        console.log('Sap xep tang dan');
        var player = manager.sortPlayersSalaryDecrease();
        console.table(player);
    };
    Callmenu.prototype.showTimetable = function () {
        var coach = manager.showTimeTable();
        console.table(coach);
    };
    Callmenu.prototype.addTimetable = function () {
        console.log('Them lich lam viec ');
        var player = input.inputWeek();
        manager.addNewTimeTable(player);
    };
    Callmenu.prototype.deleteTimetable = function () {
        console.log('Xoa lich lam viec ');
        var index = +readline.question('Nhap tuan muon xoa :');
        manager.deleteTimeTable(index);
    };
    Callmenu.prototype.updateTimetable = function () {
        console.log('Thay doi lich lam viec  ');
        var index = +readline.question('Nhap tuan muon thay doi  : ');
        var timetable = input.inputWeek();
        manager.updateTimeTable(index, timetable);
    };
    Callmenu.prototype.showSchedule = function () {
        console.log('Lich thi dau ');
        var managers = manager.showSchedule();
        console.table(managers);
    };
    Callmenu.prototype.addSchedule = function () {
        console.log('Them lich thi dau  ');
        var managers = input.inputWeek();
        manager.addNewSchedule(managers);
    };
    Callmenu.prototype.deleteSchedule = function () {
        console.log('Xoa lich lam viec ');
        var index = +readline.question('Nhap tuan muon xoa :');
        manager.deleteSchedule(index);
    };
    Callmenu.prototype.updateSchedule = function () {
        console.log('Thay doi lich lam viec  ');
        var index = +readline.question('Nhap tuan muon thay doi  : ');
        var schedule = input.inputWeek();
        manager.updateSchedule(index, schedule);
    };
    Callmenu.prototype.showContractCoach = function () {
        console.log('--Thoi han hop dong--');
        var contract = manager.showContractsCoach();
        console.table(contract);
    };
    Callmenu.prototype.addContractCoach = function () {
        console.log('Them hop dong HLV  ');
        var contractcoach = input.inputContractCoach();
        manager.addContractCoach(contractcoach);
    };
    Callmenu.prototype.deleteContractCoach = function () {
        console.log('Xoa lich lam viec ');
        var index = +readline.question('Nhap tuan muon xoa :');
        manager.deleteContractCoach(index);
    };
    Callmenu.prototype.updateContractCoach = function () {
        console.log('Thay doi lich lam viec  ');
        var index = +readline.question('Nhap tuan muon thay doi  : ');
        var coach = input.inputContractCoach();
        manager.updateContractCoach(index, coach);
    };
    Callmenu.prototype.showCoach = function () {
        console.log('--Thong Tin HLV --');
        var coach = manager.showCoach();
        console.table(coach);
    };
    Callmenu.prototype.addCoach = function () {
        console.log('Them HLV ');
        var coach = input.inputCoach();
        manager.addCoach(coach);
    };
    Callmenu.prototype.deleteCoach = function () {
        console.log('Xoa HLV ');
        var index = +readline.question('Nhap vi tri HLV muon xoa :');
        manager.deleteCoach(index);
    };
    Callmenu.prototype.updateCoach = function () {
        console.log('Thay doi thong tin HLV ');
        var index = +readline.question('Nhap vi tri HLV muon thay doi : ');
        var coach = input.inputCoach();
        manager.updateCoach(index, coach);
    };
    Callmenu.prototype.showContractInvestor = function () {
        console.log('--Thoi han hop dong voi nha dau tu--');
        var contract = manager.showContractsInvestor();
        var data;
        var container = [];
        for (var i = 0; i < contract.length; i++) {
            data = {
                time_Contract: contract[i]._contractInvestor,
                annual_Profit: contract[i]._annualprofit,
                name_Investor: contract[i].Investor._name,
                ID_contract: contract[i].Investor._id,
                invest: contract[i].Investor._investmentamount,
            };
            container.push(data);
        }
        console.table(container);
    };
    Callmenu.prototype.addContractInvestor = function () {
        console.log('Them hop dong nha dau tu  ');
        var contractinvestor = input.inputContracInvestor();
        manager.addContractInvestor(contractinvestor);
    };
    Callmenu.prototype.deleteContractInvestor = function () {
        console.log('Xoa lich lam viec ');
        var index = +readline.question('Nhap tuan muon xoa :');
        manager.deleteContractInvestor(index);
    };
    Callmenu.prototype.updateContractInvestor = function () {
        console.log('Thay doi lich lam viec  ');
        var index = +readline.question('Nhap tuan muon thay doi  : ');
        var investor = input.inputContracInvestor();
        manager.updateContractInvestor(index, investor);
    };
    Callmenu.prototype.showInvestor = function () {
        console.log('--Thong tin nha dau tu--');
        var investor = manager.showInvestor();
        console.table(investor);
    };
    Callmenu.prototype.addInvestor = function () {
        console.log('Them nha dau tu ');
        var investor = input.inputInvestor();
        manager.addInvestor(investor);
    };
    Callmenu.prototype.updateInvestor = function () {
        console.log('Thay doi thong tin nha dau tu ');
        var index = +readline.question('Nhap vi tri nha dau tu muon thay doi :');
        var investor = input.inputInvestor();
        manager.updateInvestor(index, investor);
    };
    Callmenu.prototype.deleteInvestor = function () {
        console.log('Xoa nha dau tu ');
        var index = +readline.question('Nhap vi tri nha dau tu muon xoa : ');
        manager.deleteInvestor(index);
    };
    Callmenu.prototype.showFund = function () {
        console.log('Quy Cau Lac Bo');
        var fund = manager.allFund();
        console.table(fund);
    };
    Callmenu.prototype.showAnnualProfit = function () {
        var ID = +readline.question('Nhap ID cua nha dua tu : ');
        var annual = manager.annualProfit(ID);
        console.log("nha dau tu co ID :".concat(ID, ". Co so tien lai hang nam la :").concat(annual, " "));
    };
    return Callmenu;
}());
exports.Callmenu = Callmenu;
