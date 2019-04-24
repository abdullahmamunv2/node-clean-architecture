import { IErrorPresenter } from "@core/io.port/output";
import { ApplicationError, ErrorResponse } from "@core/exceptions";

export default class ErrorPresenter implements IErrorPresenter<ErrorResponse<ApplicationError>>{
    present(response: ErrorResponse<ApplicationError>,callback : (param : any) => void): void {
        callback(response);
    }

}