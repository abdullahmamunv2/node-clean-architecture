import 'automapper-ts/dist/automapper';
import {IResposeReadMapper} from '@core/mapper/response/address'
import {
    Entity
   } from '@core/domain'
import { IResponseModel } from '@core/RRmodel/response';
import { ReadUrbanModelAddress,ReadRuralAddressResponse } from '@core/RRmodel/response/address';

export default class AddressReadMapper implements IResposeReadMapper{
    
    constructor(){
        automapper.createMap('BaseAddress', 'ReadRuralModel')
                  .convertToType(ReadRuralAddressResponse);

        automapper.createMap('BaseAddress', 'ReadUrbanModel')
                  .convertToType(ReadUrbanModelAddress);
    }
    read(param: Entity.BaseAddress): IResponseModel {
        if(param.isUrban())
            return automapper.map('BaseAddress', 'ReadUrbanModel',param);
        else
            return automapper.map('BaseAddress', 'ReadRuralModel',param);
    }

    readAll(param: Entity.BaseAddress[]): IResponseModel {
        throw new Error("Method not implemented.");
    }
}