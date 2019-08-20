import { Container } from "inversify";
import {TYPES} from './types'
import {
    TYPE_INTERACTOR,
    TYPE_IO_PORT
} from '@core/di/types'
import * as I from './interfaces'
import * as E from './entities'
import { ErrorResponse } from "@core/errors";
import {ValidatorError} from '@core/errors';
import {ApplicationError} from '@core/errors';

const IOContainer = new Container();


IOContainer.bind<I.IValidationErrorParser>(TYPES.JoiValidationErrorParser).to(E.JoiErrorParser);
IOContainer.bind<I.IValidationErrorParser>(TYPES.JsonSchemaValidationErrorParser).to(E.JsonSchemaErrorParser);
IOContainer.bind<I.IPresenter<ErrorResponse<ApplicationError>>>(TYPE_IO_PORT.PRESENTER).to(E.ErrorPresenter);
IOContainer.bind<E.Executor>(TYPE_INTERACTOR.EXECUTOR).to(E.Executor).inSingletonScope()
IOContainer.bind<I.IEntityGatewayErrorParser>(TYPES.MongoErrorParser).to(E.MongoErrorParser);

export default IOContainer;