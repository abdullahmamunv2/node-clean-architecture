

import {IEntityGateway} from '@core/domain'
import {AddressReadInteractor} from '@core/interactor/address'
import {IResposeReadMapper} from '@core/mapper/response/address'
import {IAddressReadInteractor} from '@core/io.port/input/address'
import {IAddressReadPresenter} from '@core/io.port/output/address'
import IRequest from '@core/RRmodel/request/IRequestModel';
import { ReadAddessModel } from '@core/RRmodel/request/address/';
import {Request,Response,NextFunction}     from 'express';
import { RequestModel } from '@core/RRmodel/request';
export class AddressController {
    interactor : IAddressReadInteractor; 
    constructor(entityGateway : IEntityGateway.IAddressGateWay,
                outputPort : IAddressReadPresenter,
                resMapper     : IResposeReadMapper){
        this.interactor = new AddressReadInteractor(entityGateway,outputPort,resMapper);
    }
    async get(req : any,res : any): Promise<any> {
        let id = req.params.id;
        console.log(id);
        let body = new ReadAddessModel(id);
        let request = new RequestModel(body,res);
        return this.interactor.get(request);
    }
    

}