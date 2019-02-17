

import {
        Entity,
        IEntityGateway,
        IQuery
       } from '@core/domain'

import {Response} from '@core/mapper'
import {InputPort,OutputPort} from '@core/io.port'
import {ResModel, ReqModel} from '@core/RRmodel'

export class AddressCRUDInteractor implements InputPort.IAddressCRUD {

    entityGateway : IEntityGateway.IAddressGateWay;
    outputPort    : OutputPort.IAddressCRUD;
    mapper        : Response.Address.IAddressResCRUDMapper;
    constructor(
                entityGateway : IEntityGateway.IAddressGateWay,
                outputPort    : OutputPort.IAddressCRUD,
                mapper        : Response.Address.IAddressResCRUDMapper ){

                    this.entityGateway = entityGateway;
                    this.outputPort    = outputPort;
                    this.mapper        = mapper;
    }

    async get(id: number | string): Promise<any> {
        try {
            let address : Entity.BaseAddress = await this.entityGateway.get(id);
            let response : ResModel.BaseResponse  = this.mapper.read(address);
            this.outputPort.presentReadAddress(response);
            return Promise.resolve();
        }catch(err){
            return Promise.reject();
        }
    }

    async getAll(query: IQuery): Promise<any> {
        try {
            let address : Entity.BaseAddress[] = await this.entityGateway.getAll(query);
            return Promise.resolve();
        }catch(err){
            return Promise.reject();
        }
    }
    create(req: ReqModel.Address.AddressCRUD.CreateBaseModel): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(req: ReqModel.Address.AddressCRUD.UpdateModel): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(req: ReqModel.Address.AddressCRUD.DeleteModel): Promise<any> {
        throw new Error("Method not implemented.");
    }



}