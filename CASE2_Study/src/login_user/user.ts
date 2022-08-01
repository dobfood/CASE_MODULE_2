interface Users{
    get email():string
    set email(value:string)
    get password():string
    set password(value:string)
}

export class User implements Users {
     _email:string;
     _password:string;

    constructor(email: string, password: string) {
        this._email = email;
        this._password = password;
    }
    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}