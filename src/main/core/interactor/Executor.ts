import {Interactor} from "@core";
import { ApplicationError, ErrorResponse } from "@core";
import { IPresenter } from "@core";
import {inject, injectable } from "@core";
import {IAuthorization } from "@core";
import {
        TYPE_IO_PORT
       }                   from "@core"

@injectable()
export default class InteractorExecutor {
    constructor(
        @inject(TYPE_IO_PORT.PRESENTER)
        private errorPresenter: IPresenter<ErrorResponse<ApplicationError>>
    ){

    }
    
    async  execute<I>(interactor : Interactor<I> ,request : I,callback : (param : any) => void) : Promise<void>{
        try{
            await interactor.execute(request,callback);
        }catch(error){
            this.errorPresenter.present(error,callback);
        }
    }

    async  execute<I,U,V>(interactor : Interactor<I> ,request : I,callback : (param : any) => void,authorization : IAuthorization<U,V>) : Promise<void>{
        try{
            await interactor.execute(request,callback);
        }catch(error){
            this.errorPresenter.present(error,callback);
        }
    }
}