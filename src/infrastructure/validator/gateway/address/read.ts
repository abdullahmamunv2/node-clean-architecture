import {ReadAddessRequest} from '@core/RRmodel/request/address';
import {IReadValidatorGateway} from "@core/validator/gateway/address";
import {TYPES} from '@ioc'
import { injectable, inject } from "@core/di";
import { JsonSchemaValidatorGateway, JoiValidatorGateway } from '@infrastructure/ioc/entities';
import * as Joi from 'joi'


const joiSchema = Joi.object({
    id : Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
})

const JsonSchema : any  = {
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "pattern" : "^[0-9a-fA-F]{24}$"
      }
    },
    "required": ["id"]
  };

@injectable()
export default class ReadValidatorGateway implements IReadValidatorGateway{
    validatorGateway : JoiValidatorGateway<ReadAddessRequest>;
    constructor(@inject(TYPES.JoiValidatorGateway)
    validatorGateway : JoiValidatorGateway<ReadAddessRequest>){
        this.validatorGateway = validatorGateway;
        console.log(this.validatorGateway);
    }

    async validate(data: ReadAddessRequest): Promise<ReadAddessRequest> {
            return this.validatorGateway.validateData(data,joiSchema);
    }
}