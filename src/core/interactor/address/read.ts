import {
    Entity
   } from '@core/domain'

import {
    IReadAddressGateWay
}                               from '@core/domain/entity.gateway/address'


import { ReadAddessModel } from '@core/RRmodel/request/address';
import { ReadAddressResponse } from '@core/RRmodel/response/address';
import { IResponseMapper } from '@core/mapper';
import { IReadValidatorGateway } from '@core/validator/gateway/address';

import {TYPES}  from  '@ioc'
import { injectable, inject } from "inversify";
import { BaseAddress } from '@core/domain/entity';
import IRequest from '@core/io.port/input';
import {IPresenter} from '@core/io.port/output';
import { ErrorResponse } from '@core/exceptions';
import ValidationError from '@core/exceptions/ValidatorError';

@injectable()
export default class ReadAddressInteractor implements IRequest<ReadAddessModel> {

entityGateway       : IReadAddressGateWay;
outputPort          : IPresenter<ReadAddressResponse,ErrorResponse<ValidationError>>;
mapper              : IResponseMapper<BaseAddress,ReadAddressResponse>;
validatorGateway    : IReadValidatorGateway;
constructor(
            @inject(TYPES.ReadAddressGateway) entityGateway : IReadAddressGateWay,
            @inject(TYPES.ReadAddressPresenter) outputPort    : IPresenter<ReadAddressResponse,ErrorResponse<ValidationError>>,
            @inject(TYPES.ReadAdddressResposeMapper) mapper        : IResponseMapper<BaseAddress,ReadAddressResponse>,
            @inject(TYPES.ReadValidatorGateway)validatorGateway : IReadValidatorGateway){

                this.entityGateway      = entityGateway;
                this.outputPort         = outputPort;
                this.mapper             = mapper;
                this.validatorGateway   = validatorGateway;
}

async execute(request:ReadAddessModel,callback : (param : any) => void): Promise<any> {
    try {

        let validatorResponse = await this.validatorGateway.validate(request);
        console.log(validatorResponse);
        if(validatorResponse.hasError()){
            
            console.log(validatorResponse.getResponse());
            callback(validatorResponse.getResponse());
            return Promise.resolve();
        }
        let address : Entity.BaseAddress = await this.entityGateway.get(request.id);
        let response   = this.mapper.map(address);
        this.outputPort.present(response,callback);
        
        
    }catch(err){

    }
    return Promise.resolve();
}

}