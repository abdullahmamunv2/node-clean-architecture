import ISort from "./ISort";


export class Sort implements ISort{
    key : string = "";
    order : ORDER = ORDER.ASC

    constructor(key:string , order : ORDER){
        this.key   = key;
        this.order = order;
    }
    get Key():string{
        return this.key;
    }
    get Order() : ORDER{
        return this.order;
    }
}

export enum ORDER {
    ASC,
    DESC
}

