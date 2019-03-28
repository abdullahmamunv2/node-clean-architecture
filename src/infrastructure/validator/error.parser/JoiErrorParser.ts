import {IValidationErrorParser} from "@core/validator";
import {ValidationError} from "@core/validator/";
import { injectable, inject } from "inversify";

@injectable()
export default class JoiErrorParser implements IValidationErrorParser<any,ValidationError>{
    generate(error: any): ValidationError[] {
        let errors : ValidationError[] = [];
        let details = error.details;
        details.map((err:any)=>{
            errors.push({
                errorCode : "",
                field : err.path.join(':'),
                mesage : err.message
            });
        })
        return errors;
    }

}