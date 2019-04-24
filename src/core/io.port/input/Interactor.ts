export default interface Interactor<T> {
    execute(request:T,callback : (param : any) => void) : Promise<void>;
}