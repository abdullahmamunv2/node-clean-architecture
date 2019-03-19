import {RequestModelBody} from "@core/RRmodel/request";
export class CreateAddessModel extends RequestModelBody {
    public countryName : string = "Bangladesh";
    public countryCode : string = "BD";
    public type        : string = "";
    constructor(type:string){
        super();
        this.type = type;
    }
}

export class CreateRuralModel extends CreateAddessModel{
    public village     : string ="";
    public postOffice  : string = "";
    public thana       : string = "";
    public district    : string ="";
    
    constructor(){
        super('rural');
    }
}

export class CreateUrbanModel extends CreateAddessModel{
    public streetName   : string   ="";
    public streetNumber : number = 0;
    public TownName     : string = "";
    public postalCode   : number   = 0;
    constructor(){
        super('urban');
    }
}