import {ReadAddessRequest} from '@core/RRmodel/request/address';
import {IReadValidatorGateway} from "@core/validator/gateway/address";
import {TYPES} from '@ioc'
import { injectable, inject } from "@core/di";
import { JsonSchemaValidatorGateway } from '@infrastructure/ioc/entities';



const schema : any  = {
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
    validatorGateway : JsonSchemaValidatorGateway<ReadAddessRequest>;
    constructor(@inject(TYPES.JsonSchemaValidatorGateway)
    validatorGateway : JsonSchemaValidatorGateway<ReadAddessRequest>){
        this.validatorGateway = validatorGateway;
        console.log(this.validatorGateway);
    }

    async validate(data: ReadAddessRequest): Promise<ReadAddessRequest> {
            return this.validatorGateway.validateData(data,schema);
    }
}