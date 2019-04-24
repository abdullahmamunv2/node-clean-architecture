import Interactor from "@core/io.port/input";
import { ApplicationError, ErrorResponse } from "@core/exceptions";
import { IErrorPresenter } from "@core/io.port/output";
import { injectable, inject } from "@core/di";
@injectable()
export default class InteractorExecutor {
    /*interactor : Interactor<I>
    errorPresenter: IErrorPresenter<ErrorResponse<ApplicationError>>;
    constructor(interactor : Interactor<I>,errorPresenter: IErrorPresenter<ErrorResponse<ApplicationError>>){
        this.interactor = interactor;
        this.errorPresenter = errorPresenter;
    }*/
    static async  execute<I>(interactor : Interactor<I> ,request : I,callback : (param : any) => void) : Promise<void>{
        try{
            await interactor.execute(request,callback);
        }catch(error){
            console.log(error);
            let response   = error.getResponse();
            callback(response);
        }
    }
}