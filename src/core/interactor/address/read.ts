import {
    Entity
   } from '@core/domain'

import {
    IReadAddressGateWay
}                               from '@core/domain/entity.gateway/address'

import {IReadAddressInteractor} from '@core/io.port/input/address'
import {IReadAddressPresenter} from '@core/io.port/output/address'

import IRequest from '@core/RRmodel/request/IRequestModel';
import { ReadAddessModel } from '@core/RRmodel/request/address';
import { IResponseModel, ResponseModel } from '@core/RRmodel/response';
import { IReadAdddressResposeMapper } from '@core/mapper/response/address';
import { IReadValidatorGateway } from '@core/validator/gateway/address';

import {TYPES}  from  '@ioc'
import { injectable, inject } from "inversify";
import "reflect-metadata";

console.log(TYPES);

@injectable()
export default class ReadAddressInteractor implements IReadAddressInteractor {

entityGateway       : IReadAddressGateWay;
outputPort          : IReadAddressPresenter;
mapper              : IReadAdddressResposeMapper;
validatorGateway    : IReadValidatorGateway;
constructor(
            @inject(TYPES.ReadAddressGateway) entityGateway : IReadAddressGateWay,
            @inject(TYPES.ReadAddressPresenter) outputPort    : IReadAddressPresenter,
            @inject(TYPES.ReadAdddressResposeMapper) mapper        : IReadAdddressResposeMapper,
            @inject(TYPES.ReadValidatorGateway)validatorGateway : IReadValidatorGateway){

                this.entityGateway      = entityGateway;
                this.outputPort         = outputPort;
                this.mapper             = mapper;
                this.validatorGateway   = validatorGateway;
}

async get(req:IRequest): Promise<any> {
    try {
        
        let body = req.getBody() as ReadAddessModel;
        let validatorResponse = await this.validatorGateway.validate(body);
        if(validatorResponse.hasError()){
            console.log(validatorResponse.getErrros());
        }
        else{
            let address : Entity.BaseAddress = await this.entityGateway.get(body.id);
            let responseBody   = this.mapper.read(address);
            let response : IResponseModel  = new ResponseModel(responseBody,req.getOutputApi());
            console.log(response);
            this.outputPort.presentReadAddress(response);
            return Promise.resolve();
        }
        
    }catch(err){
        //console.log(err.message);
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