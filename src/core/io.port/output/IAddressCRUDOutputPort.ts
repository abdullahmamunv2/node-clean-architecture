
import {ResModel} from '@core/RRmodel'

export interface IAddressCRUD {
    presentCreateAddress(response   : ResModel.BaseResponse)   : void;
    presentUpdateAddress(response   : ResModel.BaseResponse)   : void;
    presentDeleteAddress(response   : ResModel.BaseResponse)   : void;
    presentReadAddress  (response   : ResModel.BaseResponse)   : void;
    presentReadAllAddress(response  : ResModel.BaseResponse)   : void;
}
