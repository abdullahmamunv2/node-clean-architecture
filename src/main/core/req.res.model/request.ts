export default class Request<H,B> {
    _authHeader? : H ;
    _isAuthRequired : boolean;
    _body : B;
    constructor(body : B){
        this._body = body;
        this._isAuthRequired = false;
    }
    getBody() : B {
        return this._body;
    }
    isAuthRequired(){
        return this._isAuthRequired;
    }
    setAuthHeader(header : H){
        this._isAuthRequired = true;
        this._authHeader = header;
    } 
    getAuthHeader(){
        return this._authHeader;
    } 
}

