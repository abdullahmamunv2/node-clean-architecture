export default interface IErrorPresenter<T> {
    presentError(response:T) : Promise<any>;
}