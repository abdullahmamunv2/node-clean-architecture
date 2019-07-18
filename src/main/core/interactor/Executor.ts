import {Interactor} from "@core";
import { ApplicationError, ErrorResponse } from "@core";
import { IErrorPresenter } from "@core";
import {inject, injectable } from "@core";
import {CORE_TYPE}     from "@core"

@injectable()
export default class InteractorExecutor {
    constructor(
        @inject(CORE_TYPE.ErrorPresenter)
        private errorPresenter: IErrorPresenter<ErrorResponse<ApplicationError>>
    ){

    }
    
    async  execute<I>(interactor : Interactor<I> ,request : I,callback : (param : any) => void) : Promise<void>{
        try{
            await interactor.execute(request,callback);
        }catch(error){
            this.errorPresenter.present(error,callback);
        }
    }
}