import BaseAddress from "./BaseAddress"
export default class RuralAddress extends BaseAddress {
    public village     : string ="";
    public postOffice  : string = "";
    public thana       : string = "";
    public district    : string ="";
    constructor(){
        super('rural');
    }
}