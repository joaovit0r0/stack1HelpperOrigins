export class Person {
    constructor (
        private _id : number,
        private _name : string,
        private _bio : string,
    ){}
    
    public get bio(){
        return this._bio;
    }

    public get name() {
        return this._name;
    }
}