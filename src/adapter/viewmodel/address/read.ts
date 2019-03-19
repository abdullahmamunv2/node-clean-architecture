
export class AddressViewModel {
    public id          : string|number='';
    public countryName : string = "Bangladesh";
    public countryCode : string = "BD";
    public type        : string = "";
    constructor(type:string){
        this.type = type;
    }   
}

export class ReadRuralAddressViewModel extends AddressViewModel{
    public village:string = "";
    public postOffice:string = "";
    public thana     :string = "";
    public district  :string ="";
    constructor(){
        super('rural');
    }
}

export class ReadUrbanAddressViewModel extends AddressViewModel {
    public streetName   : string   ="";
    public streetNumber : number = 0;
    public TownName     : string = "";
    public postalCode   : number   = 0;
    constructor(){
        super('urban');
    }
}