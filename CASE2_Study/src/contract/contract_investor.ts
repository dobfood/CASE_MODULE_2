export class ContractInvestor{

    private _contractInvestor:string;
    private _annualprofit:string;
    constructor(timecontract:string,annualprofit:string) {
        this._contractInvestor = timecontract;
        this._annualprofit = annualprofit
    }

    get timecontract(): string {
        return this._contractInvestor;
    }

    set timecontract(value: string) {
        this._contractInvestor = value;
    }
    get annualprofit(): string {
        return this._annualprofit;
    }

    set annualprofit(value: string) {
        this._annualprofit = value;
    }
}