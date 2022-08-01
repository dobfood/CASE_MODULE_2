export class Week{
    private _Monday:string;
    private _Tuesday:string;
    private _Wednesday:string;
    private _Thursday:string;
    private _Friday:string;
    private _Saturday:string;
    private _Sunday:string;

    constructor(Monday: string, Tuesday: string, Wednesday: string, Thursday: string, Friday: string, Saturday: string, Sunday: string) {
        this._Monday = Monday;
        this._Tuesday = Tuesday;
        this._Wednesday = Wednesday;
        this._Thursday = Thursday;
        this._Friday = Friday;
        this._Saturday = Saturday;
        this._Sunday = Sunday;
    }

    get Monday(): string {
        return this._Monday;
    }

    set Monday(value: string) {
        this._Monday = value;
    }

    get Tuesday(): string {
        return this._Tuesday;
    }

    set Tuesday(value: string) {
        this._Tuesday = value;
    }

    get Wednesday(): string {
        return this._Wednesday;
    }

    set Wednesday(value: string) {
        this._Wednesday = value;
    }

    get Thursday(): string {
        return this._Thursday;
    }

    set Thursday(value: string) {
        this._Thursday = value;
    }

    get Friday(): string {
        return this._Friday;
    }

    set Friday(value: string) {
        this._Friday = value;
    }

    get Saturday(): string {
        return this._Saturday;
    }

    set Saturday(value: string) {
        this._Saturday = value;
    }

    get Sunday(): string {
        return this._Sunday;
    }

    set Sunday(value: string) {
        this._Sunday = value;
    }
}