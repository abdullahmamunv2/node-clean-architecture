
import {IResponseModel} from '@core/RRmodel/response'

export interface IAddressReadPresenter {
    presentReadAddress  (response   : IResponseModel)   : void;
    presentReadAllAddress(response  : IResponseModel)   : void;
}
