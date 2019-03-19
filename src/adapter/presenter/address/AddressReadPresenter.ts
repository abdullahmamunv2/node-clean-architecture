
import { ReadRuralAddressViewModel,
        ReadUrbanAddressViewModel
        }    from '@adapter/viewmodel/address'
import {IResponseModel} from '@core/RRmodel/response'
import {
        ReadAddressResponse,
        ReadRuralAddressResponse,
        ReadUrbanModelAddress} from '@core/RRmodel/response/address'
import {IAddressReadPresenter} from '@core/io.port/output/address'

export default class AddressReadPresenter implements IAddressReadPresenter{

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