export default class ErrorResponse<T> {
    type : string;
    details : T[];

    constructor(type:string,errors:T[]=[]){
        this.type = type;
        this.details = errors;
    }

    hasError():boolean{
        return this.details.length !==0;
    }
}

