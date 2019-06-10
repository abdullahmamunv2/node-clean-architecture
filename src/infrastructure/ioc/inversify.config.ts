import { Container } from "inversify";
import {TYPES,CORE_TYPE} from './types'
import * as I from './interfaces'
import * as E from './entities'
import { BaseAddress } from "@core/domain/entity";
import { ReadAddressResponse } from "@core/RRmodel/response/address";
import { ErrorResponse } from "@core/exceptions";
import ValidationError from '@core/exceptions/ValidatorError';
import ApplicationError from '@core/exceptions/ApplicationError';


const IOContainer = new Container();

IOContainer.bind<I.IReadAddressGateWay>(CORE_TYPE.ReadAddressGateway).to(E.ReadAddressGateWay);
IOContainer.bind<I.IInteractor<E.ReadAddessRequest>>(CORE_TYPE.ReadAddressInteractor).to(E.ReadAddressInteractor);
IOContainer.bind<E.ReadAddressController>(TYPES.ReadAddressController).to(E.ReadAddressController);
IOContainer.bind<I.IPresenter<ReadAddressResponse,ErrorResponse<ValidationError>>>(CORE_TYPE.ReadAddressPresenter).to(E.ReadAddressPresenter);
IOContainer.bind<I.IReadValidatorGateway>(TYPES.ReadValidatorGateway).to(E.ReadValidatorGateway);
IOContainer.bind<I.IValidationErrorParser>(TYPES.JoiValidationErrorParser).to(E.JoiErrorParser);
IOContainer.bind<I.IValidationErrorParser>(TYPES.JsonSchemaValidationErrorParser).to(E.JsonSchemaErrorParser);
IOContainer.bind<I.IResponseMapper<BaseAddress,ReadAddressResponse>>(TYPES.ReadAdddressResposeMapper).to(E.ReadAddressResponseMapper);
IOContainer.bind<I.IValidatorGateway<E.ReadAddessRequest,E.Joi.Schema>>(TYPES.JoiValidatorGateway).to(E.JoiValidatorGateway);
IOContainer.bind<I.IValidatorGateway<E.ReadAddessRequest,any>>(TYPES.JsonSchemaValidatorGateway).to(E.JsonSchemaValidatorGateway);
IOContainer.bind<I.IMongoRepository<E.AddressModel>>(TYPES.AddressRepository).to(E.AddressRepository);
IOContainer.bind<I.IErrorPresenter<ErrorResponse<ApplicationError>>>(CORE_TYPE.ErrorPresenter).to(E.ErrorPresenter);
IOContainer.bind<E.InteractorExecutor>(CORE_TYPE.InteractorExecutor).to(E.InteractorExecutor).inSingletonScope()
IOContainer.bind<I.IEntityGatewayErrorParser>(TYPES.MongoErrorParser).to(E.MongoErrorParser);

export default IOContainer;