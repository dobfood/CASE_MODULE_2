export class ContractCoach{

    private _contractCoach:string;
    private _salary:string
    constructor(contract:string,salary: string) {
        this._contractCoach = contract;
        this._salary = salary;
    }
    get contract(): string {
        return this._contractCoach;
    }

    set contract(value: string) {
        this._contractCoach = value;
    }
    get salary(): string {
        return this._salary;
    }

    set salary(value: string) {
        this._salary = value;
    }
}