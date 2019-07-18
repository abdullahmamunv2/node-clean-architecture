import { OPERATOR } from "./Condition";

export default interface ICondition{
    Key : string;
    Value : any;
    Operator : OPERATOR;
}