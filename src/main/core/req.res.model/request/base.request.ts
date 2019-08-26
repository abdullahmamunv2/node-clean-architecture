export default class Request<B> {
    _body : B;
    constructor(body : B){
        this._body = body;
    }
    getBody() : B {
        return this._body;
    }
}

