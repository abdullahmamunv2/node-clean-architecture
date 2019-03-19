import RequestModelBody from './RequestModelBody';

export default interface IRequestModel{
    getBody()   : RequestModelBody;
    getOutputApi() : any;
}