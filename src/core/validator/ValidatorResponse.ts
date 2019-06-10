
import IValidatorResponse from "@core/validator/IValidatorResponse";
import ValidationError from "@core/exceptions/ValidatorError";
import { ErrorResponse } from "@core/exceptions";

export default class ValidatorResponse implements IValidatorResponse{
    errorResponse : ErrorResponse<ValidationError>|null = null;
    constructor(errorResponse : ErrorResponse<ValidationError> | null){
        this.errorResponse = errorResponse;
    }
    getResponse():ErrorResponse<ValidationError>|null {
        return this.errorResponse;
    }    
    hasError(): boolean {
        if(!this.errorResponse)
            return false;
        return this.errorResponse.hasError();
    }

    

}