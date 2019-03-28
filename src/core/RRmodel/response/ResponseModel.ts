import IResponseModel from "./IResponseModel";
import ResponseModelBody from './ResponseModelBody';
import ErrorBody from './ErrorBody'

export default class ResponseModel implements IResponseModel {
    
    
    
    private outputApi: any;    
    private body: ResponseModelBody;
    error  : ErrorBody|null = null;

    constructor(body : ResponseModelBody,outputApi:any){
        this.outputApi = outputApi;
        this.body = body;
    }
    getBody(): ResponseModelBody {
        return this.body;
    }
    getOutputApi() {
        return this.outputApi;
    }
    hasError(): boolean {
        return this.error !=null;
    }
    
}