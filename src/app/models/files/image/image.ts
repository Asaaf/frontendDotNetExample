export class Image {
    private _id?: number;
    private _url?: string;
    private _alt?: string;
    private _description?: string;
    private _format?: string;

    constructor(id?: number, url?: string, alt?: string, description?: string, format?: string) {
        this._id = id;
        this._url = url;
        this._alt = alt;
        this._description = description;
        this._format = format;
    }

    set url(url: string | undefined) {
        this._url = url;
    }

    get url(): string | undefined {
        return this._url;
    }

    set alt(alt: string | undefined) {
        this._alt = alt;
    }

    get alt(): string | undefined {
        return this._alt;
    }

    set description(description: string | undefined) {
        this._description = description;
    }

    get description(): string | undefined {
        return this._description;
    }

    set format(format: string | undefined) {
        this._format = format;
    }

    get format(): string | undefined {
        return this._format;
    }

    set id(id: number | undefined) {
        this._id = id;
    }

    get id(): number | undefined {
        return this._id;
    }
}
