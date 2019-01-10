import { Operator } from "./Operator";

export class Condition<T extends number | string >{
    private key : string = "";
    private value! : T ;
    private operator! : Operator;
    constructor(key : string , value :T , operator : Operator){
        this.key        = key;
        this.value      = value;
        this.operator   = operator;
    }

    get Key(){
        return this.key;
    }
    get Value(){
        return this.value;
    }
    get Operator(){
        return this.operator;
    }
}