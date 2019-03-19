import ResponseModelBody from './ResponseModelBody';

export default interface IResponseModel{
    getBody()   : ResponseModelBody;
    getOutputApi() : any;
    hasError() : boolean;
}