export class User {
    private _id?: number;
    private _name?: string;
    private _lastname?: string;
    private _email?: string;
    private _pass?: string;

    constructor(id?: number, name?: string, lastname?: string, email?: string, pass?: string) {
        this._id = id;
        this._name = name;
        this._lastname = lastname;
        this._email = email;
        this._pass = pass;
    }

    get id(): number | undefined {
        return this._id;
    }

    set id(id: number | undefined) {
        this._id = id;
    }

    get name(): string | undefined {
        return this._name;
    }

    set name(name: string | undefined) {
        this._name = name;
    }

    get lastname(): string | undefined {
        return this._lastname;
    }

    set lastname(lastname: string | undefined) {
        this._lastname = lastname;
    }

    get email(): string | undefined {
        return this._email;
    }

    set email(email: string | undefined) {
        this._email = email;
    }

    get pass(): string | undefined {
        return this._pass;
    }

    set pass(pass: string | undefined) {
        this._pass = pass;
    }
}
