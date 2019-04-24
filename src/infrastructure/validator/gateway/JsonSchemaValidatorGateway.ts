import {ValidatorResponse,IValidatorResponse} from "@core/validator/";
import {IValidationErrorParser} from "@core/validator";
import {TYPES} from '@ioc'
import { injectable, inject } from "@core/di";
import ValidationError from "@core/exceptions/ValidatorError";
import ResponseError from "@core/exceptions/ErrorResponse";
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
            let errorResponse   = new ResponseError<ValidationError>(ERROR_TYPE.VALIDATION_ERROR,errors);
            let response = new ValidatorResponse(errorResponse);
            throw response;
        }
        
        
    }
}