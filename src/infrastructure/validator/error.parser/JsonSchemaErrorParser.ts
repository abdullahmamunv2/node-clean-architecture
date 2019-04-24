import {IValidationErrorParser} from "@core/validator";
import { injectable } from "@core/di";
import ValidationError from "@core/exceptions/ValidatorError";

@injectable()
export default class JsonSchemaErrorParser implements IValidationErrorParser{
    generate(errorList: any): ValidationError[] {
        let errors : ValidationError[] = [];
        errorList.map((err:any)=>{
            errors.push({
                message: err.message,
                errorCode : 0,
                originalValue : err.instance,
                field : err.property
            });
        })
        return errors;
    }

}