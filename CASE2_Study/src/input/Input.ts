import {FootballPlayer} from "../football_player/FootballPlayer";
import {Coach} from "../coach/Coach";
import {Investor} from "../investor/Investor";
import {Week} from "../wooking_week/Workingweek";
import {ContractCoach} from "../contract/contrach_coach";
import {ContractInvestor} from "../contract/contract_investor";
import * as readline from 'readline-sync'

export class Input {
    inputPlayer(): FootballPlayer {
        let name = readline.question('Nhap ten cau thu : ');
        let age = +readline.question('Nhap tuoi : ');
        let height = +readline.question('Nhap chieu cao cau thu :');
        let weight = +readline.question('Nhap can nang cau thu : ');
        let clothersnumber = +readline.question('Nhap so ao cau thU : ');
        let nation = readline.question('Nhap quoc tich cau thu cau thu :');
        let goals = +readline.question('Nhap so ban thang cau thu da ghi duoc : ');
        let salary = readline.question('Nhap luong cua cau thu ');
        return new FootballPlayer(name, age, height, weight, clothersnumber, nation, goals, salary)
    }

    inputCoach(): Coach {
        let name = readline.question('Nhap ten HLV : ');
        let age = +readline.question('Nhap tuoi HLV : ');
        let experience = readline.question('Nhap kinh nghiem cua HLV : ')
        return new Coach(name, age, experience)
    }

    inputInvestor(): Investor {
        let name = readline.question('Nhap ten cua nha dau tu : ');
        let id = +readline.question('Nhap id cua nha dau tu : ')
        let share = +readline.question('Nhap co phan cua nha dau tu : ');
        let investmentamount = +readline.question('Nhap so tien dau tu  : ');
        return new Investor(name, id, share, investmentamount)

    }

    inputWeek(): Week {
        let monday = readline.question('Nhap lich cua thu hai');
        let tuesday = readline.question('Nhap lich cua thu ba')
        let wednesday = readline.question('Nhap lich cua thu tu');
        let thursday = readline.question('Nhap lich cua thu nam');
        let friday = readline.question('Nhap lich cua thu sau');
        let saturday = readline.question('Nhap lich cua thu bay');
        let sunday = readline.question('Nhap lich cua chu nhat');
        return new Week(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
    }

    inputContractCoach(): ContractCoach {
        let contracts = readline.question('Nhap hop dong voi HLV : ');
        let salary = readline.question('Nhap luong cua HLV')
        return new ContractCoach(contracts, salary)
    }

    inputContracInvestor(): ContractInvestor {
        let contracts = readline.question('Nhap hop dong voi nha dau tu : ');
        let annual = +readline.question('Nhap phan tram lai hang nam voi nha dau tu : ')
        let Investor = this.inputInvestor()
        return new ContractInvestor(contracts, annual,Investor)
    }
}