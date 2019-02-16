import { BaseResponse } from "../base";

export class CreateModel extends BaseResponse {
    public id! : number|string;
    public countryName : string = "Bangladesh";
    public countryCode : string = "BD";
    public type        : string = "";
}

export class ReadBaseModel extends BaseResponse {
    public countryName : string = "Bangladesh";
    public countryCode : string = "BD";
    public type        : string = "";
    constructor(type:string){
        super();
        this.type = type;
    }
}

export class ReadRuralModel extends ReadBaseModel{
    public village     : string ="";
    public postOffice  : string = "";
    public thana       : string = "";
    public district    : string ="";
    
    constructor(){
        super('rural');
    }
}

export class ReadUrbanModel extends ReadBaseModel{
    public streetName   : string   ="";
    public streetNumber : number = 0;
    public TownName     : string = "";
    public postalCode   : number   = 0;
    constructor(){
        super('urban');
    }
}

export class ReadAllModel extends BaseResponse {
    public page : number=1;
    public limit : number=10;
    
}

export class UpdateModel extends BaseResponse {

}

export class DeleteModel extends BaseResponse {
    
}