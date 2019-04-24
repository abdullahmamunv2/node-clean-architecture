import {ReadAddessRequest} from '@core/RRmodel/request/address';

export default interface IReadValidatorGateway{
    validate(data:ReadAddessRequest):Promise<ReadAddessRequest>;
}