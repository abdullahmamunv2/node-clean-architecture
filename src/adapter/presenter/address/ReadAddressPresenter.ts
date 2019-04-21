
import { ReadRuralAddressViewModel,
        ReadUrbanAddressViewModel,
        AddressViewModel
        }    from '@adapter/viewmodel/address'
import {
        ReadAddressResponse} from '@core/RRmodel/response/address'

import { injectable } from "inversify";
import {IPresenter, IErrorPresenter} from '@core/io.port/output';
import { ErrorResponse } from '@core/exceptions';
import { ValidationError } from '@infrastructure/ioc/entities';


@injectable()
export default class ReadAddressPresenter implements IPresenter<ReadAddressResponse,ErrorResponse<ValidationError>>{
    viewmodel:AddressViewModel|null=null;
    
    constructor(){
        automapper.createMap('ReadRuralAddressResponse', 'ReadRuralAddressViewModel')
                  .convertToType(ReadRuralAddressViewModel);

        automapper.createMap('ReadUrbanModelAddress', 'ReadUrbanAddressViewModel')
                  .convertToType(ReadUrbanAddressViewModel);
    }
    present(response: ReadAddressResponse,callback : (param : any) => void): Promise<any> {
        console.log(typeof response);
        console.log(Object.keys(response));
        if(response.isUrban()){
            this.viewmodel = automapper.map(
                                                            'ReadUrbanModelAddress',
                                                            'ReadUrbanAddressViewModel',
                                                            response);
        }
        else{
            this.viewmodel = automapper.map(
                                                            'ReadRuralAddressResponse',
                                                            'ReadRuralAddressViewModel',
                                                            response);
        }
        
        callback(this.viewmodel);

        return Promise.resolve();
    }
}