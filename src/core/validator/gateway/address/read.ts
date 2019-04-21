import IValidatorResponse from "@core/validator/IValidatorResponse";
import {ReadAddessModel} from '@core/RRmodel/request/address';
import ValidationError from "@core/exceptions/ValidatorError";

export default interface IReadValidatorGateway{
    validate(data:ReadAddessModel):Promise<IValidatorResponse>;
}