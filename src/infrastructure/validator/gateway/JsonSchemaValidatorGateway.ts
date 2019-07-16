import {ValidatorResponse} from "@core/validator/";
import {IValidationErrorParser} from "@core/validator";
import {TYPES} from '@ioc'
import { injectable, inject } from "@core/di";
import ValidationError from "@core/exceptions/ValidatorError";
import { ERROR_TYPE } from "@core/exceptions";
import IValidatorGateway from "@core/validator/gateway/IValidatorGateway";
import {validate} from 'jsonschema';


@injectable()
export default class JsonSchemaValidatorGateway<T> implements IValidatorGateway<T,any>{
    errorGenerator : IValidationErrorParser;
    constructor(
                @inject(TYPES.JsonSchemaValidationErrorParser) errorGenerator : IValidationErrorParser
                ){
        this.errorGenerator = errorGenerator
    }
    async validateData(data: T, schema : any): Promise<T> {
        let errors : ValidationError[] = [];
        let result = validate(data,schema);
        if(result.valid){
            return result.instance
        }
        else{
            errors = this.errorGenerator.generate(result.errors);
            let response   = new ValidatorResponse(ERROR_TYPE.VALIDATION_ERROR,errors);
            throw response;
        }
        
        
    }
}