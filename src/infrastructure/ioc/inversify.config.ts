import { Container } from "inversify";
import {TYPES,CORE_TYPE} from './types'
import * as I from './interfaces'
import * as E from './entities'
import { ErrorResponse } from "@core/exceptions";
import ValidationError from '@core/exceptions/ValidatorError';
import ApplicationError from '@core/exceptions/ApplicationError';


const IOContainer = new Container();


IOContainer.bind<I.IValidationErrorParser>(TYPES.JoiValidationErrorParser).to(E.JoiErrorParser);
IOContainer.bind<I.IValidationErrorParser>(TYPES.JsonSchemaValidationErrorParser).to(E.JsonSchemaErrorParser);
IOContainer.bind<I.IErrorPresenter<ErrorResponse<ApplicationError>>>(CORE_TYPE.ErrorPresenter).to(E.ErrorPresenter);
IOContainer.bind<E.InteractorExecutor>(CORE_TYPE.InteractorExecutor).to(E.InteractorExecutor).inSingletonScope()
IOContainer.bind<I.IEntityGatewayErrorParser>(TYPES.MongoErrorParser).to(E.MongoErrorParser);

export default IOContainer;