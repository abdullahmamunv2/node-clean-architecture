import { ReadAddessRequest } from '@core/RRmodel/request/address/';
import {CORE_TYPE}  from  '@core/types'
import { injectable, inject } from "@core/di";
import Interactor from '@core/io.port/input';
import InteractorExecutor from '@core/interactor/Executor';


@injectable()
export class ReadAddressController {
     
    constructor(@inject(CORE_TYPE.ReadAddressInteractor) 
                private interactor   : Interactor<ReadAddessRequest>,
                @inject(CORE_TYPE.InteractorExecutor)
                private interactorExecutor : InteractorExecutor){
    }
    async get(req : any,res : any): Promise<void> {
        let id = req.params.id;
        let request = new ReadAddessRequest(id);
        this.interactorExecutor.execute<ReadAddessRequest>(this.interactor,request,(viewModel:any)=>{
            res.status(viewModel.getHttpStatusCode()).json(viewModel.getResponse());
        });
    }
}