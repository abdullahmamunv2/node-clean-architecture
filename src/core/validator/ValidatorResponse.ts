import ValidationError from "./ValidationError";
import IValidatorResponse from "./IValidatorResponse";

export default class ValidatorResponse implements IValidatorResponse{
    private _errors : ValidationError[] = [];
    constructor(errors : ValidationError[]){
        this._errors = errors;
    }
    getErrros(): ValidationError[] {
        return this._errors;
    }    
    hasError(): boolean {
        return this._errors.length !=0;
    }

}