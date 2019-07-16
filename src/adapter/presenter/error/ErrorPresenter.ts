import {IOport,Exception,DI} from "@core";
import {ErrorViewModel} from "@adapter/viewmodel";
import {ERROR_TO_STATUS} from '@adapter/presenter/STATUS'
import {ERROR_TO_HTTP_CODE} from '@adapter/presenter/HTTP_CODE'
declare type HTTP_ERROR_TYPE = keyof typeof ERROR_TO_HTTP_CODE;
declare type RESPONSE_STATUS_TYPE = keyof typeof ERROR_TO_STATUS;

const injectable = DI.injectable;



@injectable()
export default class ErrorPresenter implements IOport.output.IErrorPresenter<Exception.ErrorResponse<Exception.ApplicationError>>{
    present(response: Exception.ErrorResponse<Exception.ApplicationError>,callback : (param : any) => void): void {
        let errorType : string  = response.type;
        let statusCode = ERROR_TO_HTTP_CODE[errorType as HTTP_ERROR_TYPE]
        let status = ERROR_TO_STATUS[errorType as RESPONSE_STATUS_TYPE];
        let viewmodel = new ErrorViewModel<Exception.ErrorResponse<Exception.ApplicationError>>(response,status.toString(),statusCode);
        callback(viewmodel);
    }

}