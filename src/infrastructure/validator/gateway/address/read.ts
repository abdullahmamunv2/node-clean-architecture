import {ValidatorResponse,IValidatorResponse} from "@core/validator/";
import {ReadAddessModel} from '@core/RRmodel/request/address';
import {IReadValidatorGateway} from "@core/validator/gateway/address";
import * as Joi from 'joi';
import {IValidationErrorParser} from "@core/validator";
import {TYPES} from '@ioc'
import { injectable, inject } from "inversify";
import "reflect-metadata";
import ValidationError from "@core/exceptions/ValidatorError";
import ResponseError from "@core/exceptions/ErrorResponse";
import { ERROR_TYPE } from "@core/exceptions";




const schema : Joi.Schema = Joi.object({
    id : Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
})

@injectable()
export default class ReadValidatorGateway implements IReadValidatorGateway{
    errorGenerator : IValidationErrorParser;
    constructor(
                @inject(TYPES.ValidationErrorParser) errorGenerator : IValidationErrorParser
                ){
        this.errorGenerator = errorGenerator
    }
    async validate(data: ReadAddessModel): Promise<IValidatorResponse> {
        let errors : ValidationError[] = [];
        try{
            data = await Joi.validate(data,schema);
        }catch(error){
            errors = this.errorGenerator.generate(error);
        }
        let errorResponse   = new ResponseError<ValidationError>(ERROR_TYPE.VALIDATION_ERROR,errors);
        
        let response = new ValidatorResponse(errorResponse);
        return response;
        
    }
}