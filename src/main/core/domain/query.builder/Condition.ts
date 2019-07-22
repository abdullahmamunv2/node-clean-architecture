import ICondition from "./ICondition";

export default class Condition implements ICondition{
    private _key: string;
    private _value: any;
    private _operator: OPERATOR;
    constructor(key:string ,value:any , operator:OPERATOR ){
        this._key = key;
        this._value = value;
        this._operator = operator;
    }
    get Key():string {
        return this._key;
    }   
    get Value():any {
        return this._value;
    }
    get Operator():OPERATOR {
        return this._operator;
    }   
}

export enum OPERATOR {
    EQ,
    NEQ,
    LT,
    GT,
    LTEQ,
    GTEQ
}