import {ValidatorResponse} from "@core";
import {IValidationErrorParser} from "@core";
import {TYPES} from '@infrastructure'
import { injectable, inject } from "@core";
import {ValidatorError} from "@core";
import { ERROR_TYPE } from "@core";
import {IValidatorGateway} from "@core";
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
        let errors : ValidatorError[] = [];
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