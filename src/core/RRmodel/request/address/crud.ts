import { BaseRequest } from "../base";

export class CreateBaseModel extends BaseRequest {
    public countryName : string = "Bangladesh";
    public countryCode : string = "BD";
    public type        : string = "";
    constructor(type:string){
        super();
        this.type = type;
    }
}

export class CreateRuralModel extends CreateBaseModel{
    public village     : string ="";
    public postOffice  : string = "";
    public thana       : string = "";
    public district    : string ="";
    
    constructor(){
        super('rural');
    }
}

export class CreateUrbanModel extends CreateBaseModel{
    public streetName   : string   ="";
    public streetNumber : number = 0;
    public TownName     : string = "";
    public postalCode   : number   = 0;
    constructor(){
        super('urban');
    }
}

export class ReadModel extends BaseRequest {
    
}

export class ReadAllModel extends BaseRequest {
    
}

export class UpdateModel extends BaseRequest {

}

export class DeleteModel extends BaseRequest {
    
}