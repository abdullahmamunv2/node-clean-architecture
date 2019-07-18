import ApplicationError from "./ApplicationError";

export default class ValidationError extends ApplicationError {
    field : string ='';
    originalValue : string = '';
}