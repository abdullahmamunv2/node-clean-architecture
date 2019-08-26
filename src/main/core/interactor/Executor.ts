import {Interactor} from "@core/io.port";
import { ApplicationError, ErrorResponse } from "@core/errors";
import { IPresenter } from "@core/io.port";
import {inject, injectable } from "@core/di";
import {IAuthorization } from "@core/authorization";
import 
        {TYPE_IO_PORT}                   from "@core/di"

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
}