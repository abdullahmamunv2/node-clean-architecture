import IRequestModel from "./IRequestModel";
import RequestModelBody from './RequestModelBody';

export default class RequestModel implements IRequestModel {
    
    
    private outputApi: any;    
    private body: RequestModelBody;

    constructor(body : RequestModelBody,outputApi:any){
        this.outputApi = outputApi;
        this.body = body;
    }
    getBody(): RequestModelBody {
        return this.body;
    }
    getOutputApi() {
        return this.outputApi;
    }
    
}