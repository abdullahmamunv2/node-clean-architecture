import { ID } from "./Id";

export class BaseAddress {
    public id          : ID<number>     = new ID(0);
    public countryName : string = "Bangladesh";
    public countryCode : string = "BD";
    public type        : string = "";
    constructor(type:string){
        this.type = type;
    }
}