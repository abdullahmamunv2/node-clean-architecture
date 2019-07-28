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
IOContainer.bind<I.IPresenter<ErrorResponse<ApplicationError>>>(CORE_TYPE.TYPE_IO_PORT.PRESENTER).to(E.ErrorPresenter);
IOContainer.bind<E.Executor>(CORE_TYPE.TYPE_INTERACTOR.EXECUTOR).to(E.Executor).inSingletonScope()
IOContainer.bind<I.IEntityGatewayErrorParser>(TYPES.MongoErrorParser).to(E.MongoErrorParser);

export default IOContainer;