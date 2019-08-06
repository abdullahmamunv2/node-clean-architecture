import {ValidatorResponse} from "@core";
import {IValidationErrorParser} from "@core";
import {TYPES} from '@infrastructure'
import { injectable, inject } from "@core";
import {ValidatorError} from "@core";
import { ERROR_TYPE } from "@core";
import {IValidatorGateway} from "@core";
import * as Joi from '@hapi/joi'



@injectable()
export default class JoiValidatorGateway<T> implements IValidatorGateway<T,Joi.Schema>{
    errorGenerator : IValidationErrorParser;
    constructor(
                @inject(TYPES.JoiValidationErrorParser) errorGenerator : IValidationErrorParser
                ){
        this.errorGenerator = errorGenerator
    }
    async validateData(data: T, schema : Joi.Schema): Promise<T> {
        let errors : ValidatorError[] = [];
        try{
            data = await Joi.validate(data,schema);
            return data;
        }catch(error){
            console.log(error);
            errors = this.errorGenerator.generate(error.details);
            let response   = new ValidatorResponse(ERROR_TYPE.VALIDATION_ERROR,errors);
            throw response;
        }
        
        
    }
}