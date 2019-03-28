
import { ReadRuralAddressViewModel,
        ReadUrbanAddressViewModel
        }    from '@adapter/viewmodel/address'
import {IResponseModel} from '@core/RRmodel/response'
import {
        ReadAddressResponse} from '@core/RRmodel/response/address'
import {IReadAddressPresenter} from '@core/io.port/output/address'

import { injectable, inject } from "inversify";
import "reflect-metadata";


@injectable()
export default class ReadAddressPresenter implements IReadAddressPresenter{

    constructor(){
        automapper.createMap('ReadRuralAddressResponse', 'ReadRuralAddressViewModel')
                  .convertToType(ReadRuralAddressViewModel);

        automapper.createMap('ReadUrbanModelAddress', 'ReadUrbanAddressViewModel')
                  .convertToType(ReadUrbanAddressViewModel);
    }
    presentReadAddress(response: IResponseModel): void {
        if(!response.hasError()){
            
            let body = response.getBody() as ReadAddressResponse;
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
    presentReadAllAddress(response: IResponseModel): void {
        throw new Error("Method not implemented.");
    }

    


}