"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var FootballPlayer_1 = require("../football_player/FootballPlayer");
var Coach_1 = require("../coach/Coach");
var Investor_1 = require("../investor/Investor");
var Workingweek_1 = require("../wooking_week/Workingweek");
var contrach_coach_1 = require("../contract/contrach_coach");
var contract_investor_1 = require("../contract/contract_investor");
var readline = require("readline-sync");
var Input = /** @class */ (function () {
    function Input() {
    }
    Input.prototype.inputPlayer = function () {
        var name = readline.question('Nhap ten cau thu : ');
        var age = +readline.question('Nhap tuoi : ');
        var height = +readline.question('Nhap chieu cao cau thu :');
        var weight = +readline.question('Nhap can nang cau thu : ');
        var clothersnumber = +readline.question('Nhap so ao cau thU : ');
        var nation = readline.question('Nhap quoc tich cau thu cau thu :');
        var goals = +readline.question('Nhap so ban thang cau thu da ghi duoc : ');
        var salary = +readline.question('Nhap luong cua cau thu ');
        return new FootballPlayer_1.FootballPlayer(name, age, height, weight, clothersnumber, nation, goals, salary);
    };
    Input.prototype.inputCoach = function () {
        var name = readline.question('Nhap ten HLV : ');
        var age = +readline.question('Nhap tuoi HLV : ');
        var experience = readline.question('Nhap kinh nghiem cua HLV : ');
        return new Coach_1.Coach(name, age, experience);
    };
    Input.prototype.inputInvestor = function () {
        var name = readline.question('Nhap ten cua nha dau tu : ');
        var id = +readline.question('Nhap id cua nha dau tu : ');
        var share = +readline.question('Nhap co phan cua nha dau tu : ');
        var investmentamount = +readline.question('Nhap so tien dau tu  : ');
        return new Investor_1.Investor(name, id, share, investmentamount);
    };
    Input.prototype.inputWeek = function () {
        var monday = readline.question('Nhap lich cua thu hai');
        var tuesday = readline.question('Nhap lich cua thu ba');
        var wednesday = readline.question('Nhap lich cua thu tu');
        var thursday = readline.question('Nhap lich cua thu nam');
        var friday = readline.question('Nhap lich cua thu sau');
        var saturday = readline.question('Nhap lich cua thu bay');
        var sunday = readline.question('Nhap lich cua chu nhat');
        return new Workingweek_1.Week(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
    };
    Input.prototype.inputContractCoach = function () {
        var contracts = readline.question('Nhap hop dong voi HLV : ');
        var salary = readline.question('Nhap luong cua HLV');
        return new contrach_coach_1.ContractCoach(contracts, salary);
    };
    Input.prototype.inputContracInvestor = function () {
        var contracts = readline.question('Nhap hop dong voi nha dau tu : ');
        var annual = +readline.question('Nhap phan tram lai hang nam voi nha dau tu : ');
        var Investor = this.inputInvestor();
        return new contract_investor_1.ContractInvestor(contracts, annual, Investor);
    };
    return Input;
}());
exports.Input = Input;
