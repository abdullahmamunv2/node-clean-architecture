import {
    Entity,
    IEntityGateway,
    IQuery
   } from '@core/domain'

import {IAddressReadInteractor} from '@core/io.port/input/address'
import {IAddressReadPresenter} from '@core/io.port/output/address'

import IRequest from '@core/RRmodel/request/IRequestModel';
import { ReadAddessModel } from '@core/RRmodel/request/address';
import { IResponseModel, ResponseModel } from '@core/RRmodel/response';
import { IResposeReadMapper } from '@core/mapper/response/address';


export default class AddressReadInteractor implements IAddressReadInteractor {

entityGateway : IEntityGateway.IAddressGateWay;
outputPort    : IAddressReadPresenter;
mapper        : IResposeReadMapper;
constructor(
            entityGateway : IEntityGateway.IAddressGateWay,
            outputPort    : IAddressReadPresenter,
            mapper        : IResposeReadMapper ){

                this.entityGateway = entityGateway;
                this.outputPort    = outputPort;
                this.mapper        = mapper;
}

async get(req:IRequest): Promise<any> {
    try {
        let body = req.getBody() as ReadAddessModel;

        let address : Entity.BaseAddress = await this.entityGateway.get(body.id);
        let responseBody   = this.mapper.read(address);
        let response : IResponseModel  = new ResponseModel(responseBody,req.getOutputApi());
        console.log(response);
        this.outputPort.presentReadAddress(response);
        return Promise.resolve();
    }catch(err){
        console.log(err);
        return Promise.reject(err);
    }
}

async getAll(req:IRequest): Promise<any> {
    throw new Error("Method not implemented.");
    /*try {
        let address : Entity.BaseAddress[] = await this.entityGateway.getAll(query);
        return Promise.resolve();
    }catch(err){
        return Promise.reject();
    }*/
}



}