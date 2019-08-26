import {IValidationErrorParser} from "@core/validator";
import { injectable } from "@core/di";
import {ValidatorError} from "@core/errors";

@injectable()
export default class JoiErrorParser implements IValidationErrorParser{
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