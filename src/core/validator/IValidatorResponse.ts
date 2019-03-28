import ValidationError from "./ValidationError";

export default interface IValidatorResponse{
    getErrros()   : ValidationError[];
    hasError() : boolean;
}