import {Validator} from "@core";
import { injectable } from "@core/di";
import ValidationError from "@core/exceptions/ValidatorError";

@injectable()
export default class JsonSchemaErrorParser implements Validator.IValidationErrorParser{
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