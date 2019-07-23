export default class Request<E,A> {
    _authorization? : A ;
    _body : E;
    constructor(body : E){
        this._body = body;
    }
    getBody() : E {
        return this._body;
    }
    isAuthRequired(){
        return this._authorization != undefined;
    }
    getAuthorization(){
        return this._authorization;
    } 
}

