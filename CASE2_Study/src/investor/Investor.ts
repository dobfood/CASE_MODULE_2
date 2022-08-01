export class Investor{

    private _name:string;
    private _id:number;
    private _share:number;
    private _investmentamount:number;
    private _profit:string;


    constructor(name: string,
                id: number,
                share: number,
                investmentamount: number,
                profit: string,
                ) {

        this._name = name;
        this._id = id;
        this._share = share;
        this._investmentamount = investmentamount;
        this._profit = profit;


    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get share(): number {
        return this._share;
    }

    set share(value: number) {
        this._share = value;
    }

    get investmentamount(): number {
        return this._investmentamount;
    }

    set investmentamount(value: number) {
        this._investmentamount = value;
    }

    get profit(): string {
        return this._profit;
    }

    set profit(value: string) {
        this._profit = value;
    }




}

