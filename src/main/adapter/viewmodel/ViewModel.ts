export default abstract class ViewModel<T> {
    readonly httpStatusCode : number;
    readonly responseStatus : string;
    readonly data : T;
    constructor(data:T,responseStatus :string,httpStatusCode:number=200){
        this.data = data;
        this.httpStatusCode = httpStatusCode;
        this.responseStatus = responseStatus;
    }
    getHttpStatusCode(){
        return this.httpStatusCode;
    }
    getResponseStatus(){
        return this.responseStatus;
    }
    abstract getResponse() : any;
}

