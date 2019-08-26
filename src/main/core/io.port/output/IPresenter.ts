export interface IPresenter<T> {
    present(response:T,callback : (param : any) => void) : void;
}