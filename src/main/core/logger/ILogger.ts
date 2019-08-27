

export default interface ILogger{
    trace(log:string):void;
    debug(log:string):void;
    info(log:string):void;
    warn(log:string):void;
    error(log:string):void;
    fatal(log:string):void;
}