
import {IResponseModel} from '@core/RRmodel/response'

export interface IReadAddressPresenter {
    presentReadAddress  (response   : IResponseModel)   : void;
    presentReadAllAddress(response  : IResponseModel)   : void;
}
