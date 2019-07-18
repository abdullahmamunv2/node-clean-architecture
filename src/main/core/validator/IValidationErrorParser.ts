import { IErrorParser } from "@core";
import {ValidatorError} from "@core";

export default interface IValidationErrorParser extends IErrorParser<any,ValidatorError[]>{
    
}