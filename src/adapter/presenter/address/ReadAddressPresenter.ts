
import { ReadRuralAddressViewModel,
        ReadUrbanAddressViewModel,
        AddressViewModel
        }    from '@adapter/viewmodel/address'
import {
        ReadAddressResponse} from '@core/RRmodel/response/address'

import { injectable } from "@core/di";
import {IPresenter} from '@core/io.port/output';
import { ErrorResponse } from '@core/exceptions';
import { ValidationError } from '@infrastructure/ioc/entities';
import {SuccessViewModel} from "@adapter/viewmodel";


@injectable()
export default class ReadAddressPresenter implements IPresenter<ReadAddressResponse,ErrorResponse<ValidationError>>{
    
    constructor(){
        automapper.createMap('ReadRuralAddressResponse', 'ReadRuralAddressViewModel')
                  .convertToType(ReadRuralAddressViewModel);

        automapper.createMap('ReadUrbanModelAddress', 'ReadUrbanAddressViewModel')
                  .convertToType(ReadUrbanAddressViewModel);
    }
    present(response: ReadAddressResponse,callback : (param : any) => void): Promise<any> {
        let model:AddressViewModel|null=null;
        if(response.isUrban()){
            model = automapper.map(
                                                            'ReadUrbanModelAddress',
                                                            'ReadUrbanAddressViewModel',
                                                            response);
        }
        else{
            model = automapper.map(
                                                            'ReadRuralAddressResponse',
                                                            'ReadRuralAddressViewModel',
                                                            response);
        }
        let viewmodel = new SuccessViewModel(model,"success");
        callback(viewmodel);

        return Promise.resolve();
    }
}