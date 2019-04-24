import 'automapper-ts/dist/automapper';
import { injectable } from "@core/di";
import {IResponseMapper} from '@core/mapper'
import {
    Entity
   } from '@core/domain'
import { 
    ReadAddressResponse,
    ReadRuralAddressResponse,
    ReadUrbanModelAddress } from '@core/RRmodel/response/address';
import { BaseAddress } from '@core/domain/entity';

@injectable()
export default class ReadAddressResponseMapper implements IResponseMapper<BaseAddress,ReadAddressResponse>{
    
    constructor(){
        automapper.createMap('BaseAddress', 'ReadRuralModel')
                  .convertToType(ReadRuralAddressResponse);

        automapper.createMap('BaseAddress', 'ReadUrbanModel')
                  .convertToType(ReadUrbanModelAddress);
    }
    map(param: Entity.BaseAddress): ReadUrbanModelAddress {
        if(param.isUrban())
            return automapper.map('BaseAddress', 'ReadUrbanModel',param);
        else
            return automapper.map('BaseAddress', 'ReadRuralModel',param);
    }
}