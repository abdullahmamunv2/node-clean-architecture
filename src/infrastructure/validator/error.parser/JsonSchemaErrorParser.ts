import {IValidationErrorParser} from "@core";
import { injectable } from "@core";
import {ValidatorError} from "@core";

@injectable()
export default class JsonSchemaErrorParser implements IValidationErrorParser{
    generate(errorList: any): ValidatorError[] {
        let errors : ValidatorError[] = [];
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