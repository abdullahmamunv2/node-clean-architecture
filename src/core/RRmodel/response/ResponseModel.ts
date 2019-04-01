import { IResponseModel } from ".";

export default class ResponseModel<T> implements IResponseModel<T>{
    private body : T;
    private outputApi:any;
    constructor(body:T,outputApi : any){
        this.body = body;
        this.outputApi = outputApi
    }
    getBody() : T {
        return this.body;
    }    
    getOutputApi():any {
        return this.outputApi;
    }
}