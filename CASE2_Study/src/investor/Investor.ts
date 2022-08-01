export class Investor {

     _name: string;
    _id: number;
    private _share: number;
     _investmentamount: number;

    constructor(name: string,
                id: number,
                share: number,
                investmentamount: number,
    ) {

        this._name = name;
        this._id = id;
        this._share = share;
        this._investmentamount = investmentamount;


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
}

