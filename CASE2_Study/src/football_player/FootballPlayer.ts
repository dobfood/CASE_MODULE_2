export class FootballPlayer {
    private _name: string;
    private _age: number;
    private _height: number;
    private _weight: number
    private _clothersnumber: number
    private _nation: string;
    private _numbergoals: number
    private _salary: string

    constructor(name: string,
                age: number,
                height: number,
                weight: number,
                clothersnumber: number,
                nation: string,
                numbergoals: number,
                salary: string) {
        this._name = name;
        this._age = age;
        this._height = height;
        this._weight = weight;
        this._clothersnumber = clothersnumber
        this._nation = nation;
        this._numbergoals = numbergoals
        this._salary = salary
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }

    get clothersnumber(): number {
        return this._clothersnumber;
    }

    set clothersnumber(value: number) {
        this._clothersnumber = value;
    }

    get nation(): string {
        return this._nation;
    }

    set nation(value: string) {
        this._nation = value;
    }

    get numbergoals(): number {
        return this._numbergoals;
    }

    set numbergoals(value: number) {
        this._numbergoals = value;
    }

    get salary(): string {
        return this._salary;
    }

    set salary(value: string) {
        this._salary = value;
    }
}