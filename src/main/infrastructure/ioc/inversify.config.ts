import { Container } from "inversify";
import {TYPES,CORE_TYPE} from './types'
import * as I from './interfaces'
import * as E from './entities'
import { ErrorResponse } from "@core";
import {ValidatorError} from '@core';
import {ApplicationError} from '@core';

const IOContainer = new Container();


IOContainer.bind<I.IValidationErrorParser>(TYPES.JoiValidationErrorParser).to(E.JoiErrorParser);
IOContainer.bind<I.IValidationErrorParser>(TYPES.JsonSchemaValidationErrorParser).to(E.JsonSchemaErrorParser);
IOContainer.bind<I.IErrorPresenter<ErrorResponse<ApplicationError>>>(CORE_TYPE.ErrorPresenter).to(E.ErrorPresenter);
IOContainer.bind<E.Executor>(CORE_TYPE.InteractorExecutor).to(E.Executor).inSingletonScope()
IOContainer.bind<I.IEntityGatewayErrorParser>(TYPES.MongoErrorParser).to(E.MongoErrorParser);

export default IOContainer;