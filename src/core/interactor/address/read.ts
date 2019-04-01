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
import { ReadAddressResponse } from '@core/RRmodel/response/address';
import { IResponseMapper } from '@core/mapper';
import { IReadValidatorGateway } from '@core/validator/gateway/address';

import {TYPES}  from  '@ioc'
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { BaseAddress } from '@core/domain/entity';

console.log(TYPES);

@injectable()
export default class ReadAddressInteractor implements IReadAddressInteractor {

entityGateway       : IReadAddressGateWay;
outputPort          : IReadAddressPresenter;
mapper              : IResponseMapper<BaseAddress,ReadAddressResponse>;
validatorGateway    : IReadValidatorGateway;
constructor(
            @inject(TYPES.ReadAddressGateway) entityGateway : IReadAddressGateWay,
            @inject(TYPES.ReadAddressPresenter) outputPort    : IReadAddressPresenter,
            @inject(TYPES.ReadAdddressResposeMapper) mapper        : IResponseMapper<BaseAddress,ReadAddressResponse>,
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
            let response   = this.mapper.map(address);
            let output  : IResponseModel<ReadAddressResponse> = new ResponseModel<ReadAddressResponse>(response,req.getOutputApi())
            this.outputPort.presentReadAddress(output);
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