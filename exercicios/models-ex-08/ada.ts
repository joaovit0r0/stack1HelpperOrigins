import { Person } from "./person";

export class Ada extends Person {
    constructor(id : number, name : string, bio : string, private _whoCreatedAdaLanguage : string){
        super(id, name, bio);
    }

    public get whoCreatedAdaLanguage() {
        return this._whoCreatedAdaLanguage
    }
}
