export default interface IPresenter<T,E> {
    present(response:T,callback : (param : any) => void) : Promise<any>;
    //presentValidationError<T>(error : T):Promise<any>
}