

export default class BaseAddress {
    public id          : string|number='';
    public countryName : string = "Bangladesh";
    public countryCode : string = "BD";
    public type        : string = "";
    constructor(type:string){
        this.type = type;
    }
    isUrban():boolean{
        return this.type === 'urban';
    }
}