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
IOContainer.bind<I.IInteractor<E.ReadAddessRequest>>(TYPES.ReadAddressInteractor).to(E.ReadAddressInteractor);
IOContainer.bind<E.ReadAddressController>(TYPES.ReadAddressController).to(E.ReadAddressController);
IOContainer.bind<I.IPresenter<ReadAddressResponse,ErrorResponse<ValidationError>>>(TYPES.ReadAddressPresenter).to(E.ReadAddressPresenter);
IOContainer.bind<I.IReadValidatorGateway>(TYPES.ReadValidatorGateway).to(E.ReadValidatorGateway);
IOContainer.bind<I.IValidationErrorParser>(TYPES.JoiValidationErrorParser).to(E.JoiErrorParser);
IOContainer.bind<I.IValidationErrorParser>(TYPES.JsonSchemaValidationErrorParser).to(E.JsonSchemaErrorParser);
IOContainer.bind<I.IResponseMapper<BaseAddress,ReadAddressResponse>>(TYPES.ReadAdddressResposeMapper).to(E.ReadAddressResponseMapper);
IOContainer.bind<I.IValidatorGateway<E.ReadAddessRequest,E.Joi.Schema>>(TYPES.JoiValidatorGateway).to(E.JoiValidatorGateway);
IOContainer.bind<I.IValidatorGateway<E.ReadAddessRequest,any>>(TYPES.JsonSchemaValidatorGateway).to(E.JsonSchemaValidatorGateway);
IOContainer.bind<I.IMongoRepository<E.AddressModel>>(TYPES.AddressRepository).to(E.AddressRepository);


IOContainer.bind<I.IEntityGatewayErrorParser>(TYPES.MongoErrorParser).to(E.MongoErrorParser);

export default IOContainer;