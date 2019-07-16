import {Validator} from "@core";
import { injectable } from "@core/di";
import {ValidatorError} from "@core/exceptions";

@injectable()
export default class JoiErrorParser implements Validator.IValidationErrorParser{
    generate(errorList: any): ValidatorError[] {
        let errors : ValidatorError[] = [];
        errorList.map((err:any)=>{
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