import { Container } from "inversify";
import TYPES from './types'
import * as I from './interfaces'
import * as E from './entities'
import { BaseAddress } from "@core/domain/entity";
import { ReadAddressResponse } from "@core/RRmodel/response/address";
import { ErrorResponse } from "@core/exceptions";
import ValidationError from '@core/exceptions/ValidatorError';


const IOContainer = new Container();

IOContainer.bind<I.IReadAddressGateWay>(TYPES.ReadAddressGateway).to(E.ReadAddressGateWay);
IOContainer.bind<I.IInteractor<E.ReadAddessModel>>(TYPES.ReadAddressInteractor).to(E.ReadAddressInteractor);
IOContainer.bind<E.ReadAddressController>(TYPES.ReadAddressController).to(E.ReadAddressController);
IOContainer.bind<I.IPresenter<ReadAddressResponse,ErrorResponse<ValidationError>>>(TYPES.ReadAddressPresenter).to(E.ReadAddressPresenter);
IOContainer.bind<I.IReadValidatorGateway>(TYPES.ReadValidatorGateway).to(E.ReadValidatorGateway);
IOContainer.bind<I.IValidationErrorParser>(TYPES.ValidationErrorParser).to(E.JoiErrorParser);
IOContainer.bind<I.IResponseMapper<BaseAddress,ReadAddressResponse>>(TYPES.ReadAdddressResposeMapper).to(E.ReadAddressResponseMapper);


export default IOContainer;