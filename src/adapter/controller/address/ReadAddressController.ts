import {IReadAddressInteractor} from '@core/io.port/input/address'
import { ReadAddessModel } from '@core/RRmodel/request/address/';
import { RequestModel } from '@core/RRmodel/request';
import {IOContainer,TYPES}  from  '@ioc'
import { injectable, inject } from "inversify";
import "reflect-metadata";


@injectable()
export class ReadAddressController {
    interactor : IReadAddressInteractor; 
    constructor(@inject(TYPES.ReadAddressInteractor) interactor   : IReadAddressInteractor){
        this.interactor = interactor;
    }
    async get(req : any,res : any): Promise<any> {
        
        let id = req.params.id;
        console.log('id : ',id);
        console.log(id);
        let body = new ReadAddessModel(id);
        let request = new RequestModel(body,res);
        return this.interactor.get(request);
    }

    test(req : any,res : any) {
        console.log(req.body);
        res.json({ status: "success" , body : req.body });
    }
    

}