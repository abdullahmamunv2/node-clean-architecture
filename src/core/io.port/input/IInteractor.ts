export default interface IInteractor<T> {
    execute(request:T,callback : (param : any) => void) : Promise<any>;
}