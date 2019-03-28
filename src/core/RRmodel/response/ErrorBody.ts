

export default class ErrorBody{
    
    code  : any = 0;
    rawError : Error|null = null;
    timestamp : Date = new Date();
}