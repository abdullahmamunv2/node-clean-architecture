import ICondition from "./ICondition";

export default class Condition<V,O> implements ICondition<V,O>{
    private _key: string;
    private _value: V;
    private _operator: O;
    constructor(key:string ,value:V , operator:O, ){
        this._key = key;
        this._value = value;
        this._operator = operator;
    }
    public get Key():string {
        return this._key;
    }   
    public get Value():V {
        return this._value;
    }
    public get Operator():O {
        return this._operator;
    }   
}