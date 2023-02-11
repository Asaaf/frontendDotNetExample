export class User {
    private _id: number;
    private _name: string;
    private _lastname: string;
    private _email: string;
    private _pass: string;

    constructor(id: number, name: string, lastname: string, email: string, pass: string) {
        this._id = id;
        this._name = name;
        this._lastname = lastname;
        this._email = email;
        this._pass = pass;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(lastname: string) {
        this._lastname = lastname;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get pass(): string {
        return this._pass;
    }

    set pass(pass: string) {
        this._pass = pass;
    }
}
