import {BaseAddress} from "./BaseAddress"
export class RuralAddress extends BaseAddress {
    public village     : string ="";
    public postOffice  : string = "";
    public thana       : string = "";
    public district    : string ="";
    constructor(){
        super('rural');
    }
}