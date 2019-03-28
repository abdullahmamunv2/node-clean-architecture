import IValidatorResponse from "@core/validator/IValidatorResponse";
import {ReadAddessModel} from '@core/RRmodel/request/address';

export default interface IReadValidatorGateway{
    validate(data:ReadAddessModel):Promise<IValidatorResponse>;
}