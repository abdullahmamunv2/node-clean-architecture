import { IErrorParser } from "@core/exceptions";
import ValidationError from "@core/exceptions/ValidatorError";

export default interface IValidationErrorParser extends IErrorParser<any,ValidationError[]>{
    
}