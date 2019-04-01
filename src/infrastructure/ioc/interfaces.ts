import { IReadAddressGateWay } from '@core/domain/entity.gateway/address'
import {IReadAddressInteractor} from '@core/io.port/input/address'
import {IReadAddressPresenter} from '@core/io.port/output/address'
import { IReadValidatorGateway } from '@core/validator/gateway/address';
import { IResponseMapper } from '@core/mapper';
import {IValidationErrorParser} from "@core/validator";

export {
    IReadAddressGateWay,
    IReadAddressInteractor,
    IReadAddressPresenter,
    IReadValidatorGateway,
    IResponseMapper,
    IValidationErrorParser
}