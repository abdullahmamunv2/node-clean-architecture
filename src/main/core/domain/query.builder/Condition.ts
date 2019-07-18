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
    public get Key():string {
        return this._key;
    }   
    public get Value():any {
        return this._value;
    }
    public get Operator():OPERATOR {
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