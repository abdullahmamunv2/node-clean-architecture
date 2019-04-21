import {IValidationErrorParser} from "@core/validator";
import { injectable, inject } from "inversify";
import ValidationError from "@core/exceptions/ValidatorError";

@injectable()
export default class JoiErrorParser implements IValidationErrorParser{
    generate(error: any): ValidationError[] {
        let errors : ValidationError[] = [];
        let details = error.details;
        details.map((err:any)=>{
            errors.push({
                message: err.message,
                errorCode : 0,
                originalValue : err.context.value,
                field : err.path.join(':')
            });
        })
        return errors;
    }

}