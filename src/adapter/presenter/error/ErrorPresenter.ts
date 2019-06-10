import { IErrorPresenter } from "@core/io.port/output";
import { ApplicationError, ErrorResponse } from "@core/exceptions";
import { injectable} from "@core/di";
import {ErrorViewModel} from "@adapter/viewmodel";
import API_RESPONSE_STATUS from '@adapter/presenter/STATUS'
import {ERROR_TO_HTTP_CODE} from '@adapter/presenter/HTTP_CODE'
declare type HTTP_ERROR_TYPE = keyof typeof ERROR_TO_HTTP_CODE;

@injectable()
export default class ErrorPresenter implements IErrorPresenter<ErrorResponse<ApplicationError>>{
    present(response: ErrorResponse<ApplicationError>,callback : (param : any) => void): void {
        let errorType : string  = response.type;
        let viewmodel = new ErrorViewModel<ErrorResponse<ApplicationError>>(response,API_RESPONSE_STATUS.FAIL,ERROR_TO_HTTP_CODE[errorType as HTTP_ERROR_TYPE]);
        callback(viewmodel);
    }

}