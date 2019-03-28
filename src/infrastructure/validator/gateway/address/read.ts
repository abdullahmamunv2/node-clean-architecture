import {ValidationError,ValidatorResponse,IValidatorResponse} from "@core/validator/";
import {ReadAddessModel} from '@core/RRmodel/request/address';
import {IReadValidatorGateway} from "@core/validator/gateway/address";
import * as Joi from 'joi';
import {IValidationErrorParser} from "@core/validator";
import {TYPES} from '@ioc'
import { injectable, inject } from "inversify";
import "reflect-metadata";




const schema : Joi.Schema = Joi.object({
    id : Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
})

@injectable()
export default class ReadValidatorGateway implements IReadValidatorGateway{
    errorGenerator : IValidationErrorParser<any,ValidationError>;
    constructor(
                @inject(TYPES.ValidationErrorParser) errorGenerator : IValidationErrorParser<any,ValidationError>
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

        let response = new ValidatorResponse(errors);
        
        return response;
        
    }
}