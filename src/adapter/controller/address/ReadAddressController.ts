import { ReadAddessModel } from '@core/RRmodel/request/address/';
import {TYPES}  from  '@ioc'
import { injectable, inject } from "inversify";
import "reflect-metadata";
import IInteractor from '@core/io.port/input';


@injectable()
export class ReadAddressController {
    interactor : IInteractor<ReadAddessModel>; 
    constructor(@inject(TYPES.ReadAddressInteractor) interactor   : IInteractor<ReadAddessModel>){
        this.interactor = interactor;
    }
    async get(req : any,res : any): Promise<any> {
        let id = req.params.id;
        let request = new ReadAddessModel(id);
        return this.interactor.execute(request,(viewModel:any)=>{
            console.log(viewModel);
            res.send(viewModel);
        });
        
    }

    test(req : any,res : any) {
        console.log(req.body);
        res.json({ status: "success" , body : req.body });
    }
    

}