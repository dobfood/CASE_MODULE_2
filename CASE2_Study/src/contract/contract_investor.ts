import {Investor} from "../investor/Investor";

export class ContractInvestor {
    _contractInvestor: string;
    _annualprofit: number;
    _investor: Investor;

    constructor(timecontract: string, annualprofit: number, Investor: Investor) {
        this._contractInvestor = timecontract;
        this._annualprofit = annualprofit;
        this._investor = Investor;
    }

    get timecontract(): string {
        return this._contractInvestor;
    }

    set timecontract(value: string) {
        this._contractInvestor = value;
    }

    get annualprofit(): number {
        return this._annualprofit;
    }

    set annualprofit(value: number) {
        this._annualprofit = value;
    }

    get Investor(): Investor {
        return this._investor;
    }

    set Investor(value: Investor) {
        this._investor = value;
    }
}