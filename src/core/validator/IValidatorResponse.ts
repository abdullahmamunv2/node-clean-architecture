
import {IErrorResponse} from "@core/exceptions";
import ValidationError from "@core/exceptions/ValidatorError";

export default interface IValidatorResponse extends IErrorResponse<ValidationError>{
}