import ApplicationError from "./application.error";

export default class ValidationError extends ApplicationError {
    field : string ='';
    originalValue : string = '';
}