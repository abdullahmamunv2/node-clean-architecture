import ApplicationError from "./ApplicationError";
import { ErrorResponse } from ".";

export default class ResponseError<T> {
    type : string;
    errors : T[];

    constructor(type:string,errors:T[]=[]){
        this.type = type;
        this.errors = errors;
    }

    hasError():boolean{
        return this.errors.length !==0;
    }
}

