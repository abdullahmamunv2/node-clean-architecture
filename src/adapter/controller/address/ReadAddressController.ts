import { ReadAddessRequest } from '@core/RRmodel/request/address/';
import {TYPES}  from  '@ioc'
import { injectable, inject } from "@core/di";
import IInteractor from '@core/io.port/input';
import InteractorExecutor from '@core/interactor/Executor';


@injectable()
export class ReadAddressController {
    interactor : IInteractor<ReadAddessRequest>; 
    constructor(@inject(TYPES.ReadAddressInteractor) interactor   : IInteractor<ReadAddessRequest>){
        this.interactor = interactor;
    }
    async get(req : any,res : any): Promise<void> {
        let id = req.params.id;
        let request = new ReadAddessRequest(id);
        InteractorExecutor.execute<ReadAddessRequest>(this.interactor,request,(viewModel:any)=>{
            res.send(viewModel);
        });
    }
}