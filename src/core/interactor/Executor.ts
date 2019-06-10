import Interactor from "@core/io.port/input";
import { ApplicationError, ErrorResponse } from "@core/exceptions";
import { IErrorPresenter } from "@core/io.port/output";
import {inject, injectable } from "@core/di";
import {CORE_TYPE}     from "@core/types"

@injectable()
export default class InteractorExecutor {
    constructor(@inject(CORE_TYPE.ErrorPresenter)
             private errorPresenter: IErrorPresenter<ErrorResponse<ApplicationError>>){

    }
    
    async  execute<I>(interactor : Interactor<I> ,request : I,callback : (param : any) => void) : Promise<void>{
        try{
            await interactor.execute(request,callback);
        }catch(error){
            let response   = error.getResponse();
            this.errorPresenter.present(response,callback);
        }
    }
}