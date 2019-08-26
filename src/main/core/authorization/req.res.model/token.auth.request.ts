
export default class TokenAuthRequest {
    _resourceId : string
    _token : string
    constructor(id : string,token:string){
        this._resourceId = id;
        this._token = token;
    }
    getToken(){
        return this._token;
    }
    getId(){
        return this._resourceId;
    }
}