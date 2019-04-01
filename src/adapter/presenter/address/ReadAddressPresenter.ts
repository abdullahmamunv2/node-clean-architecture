
import { ReadRuralAddressViewModel,
        ReadUrbanAddressViewModel
        }    from '@adapter/viewmodel/address'
import {IResponseModel} from '@core/RRmodel/response'
import {
        ReadAddressResponse} from '@core/RRmodel/response/address'
import {IReadAddressPresenter} from '@core/io.port/output/address'

import { injectable } from "inversify";


@injectable()
export default class ReadAddressPresenter implements IReadAddressPresenter{

    constructor(){
        automapper.createMap('ReadRuralAddressResponse', 'ReadRuralAddressViewModel')
                  .convertToType(ReadRuralAddressViewModel);

        automapper.createMap('ReadUrbanModelAddress', 'ReadUrbanAddressViewModel')
                  .convertToType(ReadUrbanAddressViewModel);
    }
    presentReadAddress(response: IResponseModel<ReadAddressResponse>): void {
        let body = response.getBody();
        if(body.isUrban()){
            let viewmodel : ReadUrbanAddressViewModel = automapper.map(
                                                            'ReadUrbanModelAddress',
                                                            'ReadUrbanAddressViewModel',
                                                            body);
            response.getOutputApi().send(viewmodel);
        }
        else{
            let viewmodel : ReadRuralAddressViewModel = automapper.map(
                                                            'ReadRuralAddressResponse',
                                                            'ReadRuralAddressViewModel',
                                                            body);
            response.getOutputApi().send(viewmodel);
        }
    }
}