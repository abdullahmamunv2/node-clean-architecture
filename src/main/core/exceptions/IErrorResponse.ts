import { ErrorResponse } from ".";

export default interface IErrorResponse<T>{
    getResponse()   : ErrorResponse<T>|null;
    hasError() : boolean;
}