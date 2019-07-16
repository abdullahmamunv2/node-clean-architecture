export interface IErrorPresenter<T> {
    present(response:T,callback : (param : any) => void) : void;
}