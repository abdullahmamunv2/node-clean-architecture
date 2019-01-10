
import {IOport,RRmodel,Domain,Interactor} from '../../../core'

export class AddressController {
    interactor : IOport.InputPort.IAddressCRUD; 
    constructor(entityGateway :  Domain.IEntityGateway.IAddressGateWay,
                outputPort : IOport.OutputPort.IAddressCRUD){
        this.interactor = new Interactor.AddressInteractor.AddressCRUDInteractor(entityGateway,outputPort);
        
    }
    get(id: RRmodel.ReqModel.Address.Id): void {
        this.interactor.get(id);
    }
    

}