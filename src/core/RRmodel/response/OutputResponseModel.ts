import IOutputResponseModel from "./IOutputResponseModel";

export default class OutputResponseModel implements IOutputResponseModel {
    private outputApi: any;    

    constructor(outputApi:any){
        this.outputApi = outputApi;
    }
    getOutputApi() {
        return this.outputApi;
    }
    
}