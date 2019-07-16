import {
        ApplicationError,
        ErrorResponse,
        IErrorPresenter}    from "@core";

import {
    injectable
}                           from '@core';

import {
    ErrorViewModel
}                           from "@adapter";

import {
    ERROR_TO_STATUS
}                           from '@adapter'
import {
    ERROR_TO_HTTP_CODE
}                           from '@adapter'


declare type HTTP_ERROR_TYPE = keyof typeof ERROR_TO_HTTP_CODE;
declare type RESPONSE_STATUS_TYPE = keyof typeof ERROR_TO_STATUS;




@injectable()
export default class ErrorPresenter implements IErrorPresenter<ErrorResponse<ApplicationError>>{
    present(response: ErrorResponse<ApplicationError>,callback : (param : any) => void): void {
        let errorType : string  = response.type;
        let statusCode = ERROR_TO_HTTP_CODE[errorType as HTTP_ERROR_TYPE]
        let status = ERROR_TO_STATUS[errorType as RESPONSE_STATUS_TYPE];
        let viewmodel = new ErrorViewModel<ErrorResponse<ApplicationError>>(response,status.toString(),statusCode);
        callback(viewmodel);
    }

}