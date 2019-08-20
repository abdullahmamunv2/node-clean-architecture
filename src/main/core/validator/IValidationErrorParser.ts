import { IErrorParser } from "@core/errors";
import {ValidatorError} from "@core/errors";

export default interface IValidationErrorParser extends IErrorParser<any,ValidatorError[]>{
    
}