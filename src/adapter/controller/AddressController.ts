

import {IEntityGateway} from '@core/domain'
import {AddressInteractor} from '@core/Interactor'
import {Response} from '@core/Imapper'
import {InputPort,OutputPort} from '@core/io.port'

export class AddressController {
    interactor : InputPort.IAddressCRUD; 
    constructor(entityGateway : IEntityGateway.IAddressGateWay,
                outputPort : OutputPort.IAddressCRUD,
                resMapper     : Response.Address.IAddressResCRUDMapper){
        this.interactor = new AddressInteractor.AddressCRUDInteractor(entityGateway,outputPort,resMapper);
    }
    get(req : any): void {
    }
    

}