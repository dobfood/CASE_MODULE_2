export class Coach {
    private _name: string;
    private _age: number;

    private _experience: string;

    constructor(name: string, age: number,experience: string) {
        this._name = name;
        this._age = age;
        this._experience = experience;
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



    get experience(): string {
        return this._experience;
    }

    set experience(value: string) {
        this._experience = value;
    }
}