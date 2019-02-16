import BaseAddress from "./BaseAddress"
export default class UrbanAddress extends BaseAddress {
    public streetName   : string   ="";
    public streetNumber : number = 0;
    public TownName     : string = "";
    public postalCode   : number   = 0;
    constructor(){
        super('urban');
    }
}