
import ValidationError from "@core/exceptions/ValidatorError";
import { ErrorResponse } from "@core/exceptions";

export default class ValidatorResponse extends ErrorResponse<ValidationError>{

}