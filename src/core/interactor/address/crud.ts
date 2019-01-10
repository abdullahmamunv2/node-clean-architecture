import {Domain,IOport,RRmodel} from '../../' 

export class AddressCRUDInteractor implements IOport.InputPort.IAddressCRUD {

    entityGateway : Domain.IEntityGateway.IAddressGateWay;
    outputPort    : IOport.OutputPort.IAddressCRUD;
    constructor(entityGateway : Domain.IEntityGateway.IAddressGateWay,
                outputPort    : IOport.OutputPort.IAddressCRUD  ){

                    this.entityGateway = entityGateway;
                    this.outputPort    = outputPort
    }

    async get(id: number | string): Promise<any> {
        try {
            let address : Domain.Entity.BaseAddress = await this.entityGateway.get(id);
            return Promise.resolve();
        }catch(err){
            return Promise.reject();
        }
    }

    async getAll(query: Domain.IQuery): Promise<any> {
        try {
            let address : Domain.Entity.BaseAddress[] = await this.entityGateway.getAll(query);
            return Promise.resolve();
        }catch(err){
            return Promise.reject();
        }
    }
    create(req: RRmodel.ReqModel.Address.AddressCRUD.CreateBaseModel): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(req: RRmodel.ReqModel.Address.AddressCRUD.UpdateModel): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(req: RRmodel.ReqModel.Address.AddressCRUD.DeleteModel): Promise<any> {
        throw new Error("Method not implemented.");
    }



}