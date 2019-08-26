
export default interface IServer{
    start()     : Promise<boolean | Error>;
    stop()      : Promise<boolean |Error>;
    restart()   : Promise<boolean | Error>;
}