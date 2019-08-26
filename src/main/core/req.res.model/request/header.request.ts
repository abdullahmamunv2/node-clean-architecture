export default class SecureRequest<H,B> {
    _header : H ;
    _body : B;
    constructor(body : B,_header : H){
        this._body = body;
        this._header = _header
    }
    getBody() : B {
        return this._body;
    }
    getHeader(){
        return this._header;
    } 
}

