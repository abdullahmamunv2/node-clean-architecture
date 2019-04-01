export  class ReadAddressResponse {
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

export class ReadRuralAddressResponse extends ReadAddressResponse{
    public village     : string ="";
    public postOffice  : string = "";
    public thana       : string = "";
    public district    : string ="";
    
    constructor(){
        super('rural');
    }
}

export class ReadUrbanModelAddress extends ReadAddressResponse{
    public streetName   : string   ="";
    public streetNumber : number = 0;
    public TownName     : string = "";
    public postalCode   : number   = 0;
    constructor(){
        super('urban');
    }
}

export class ReadAllAddressResponse {
    public page : number=1;
    public limit : number=10;
}