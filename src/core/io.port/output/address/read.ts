import { ReadAddressResponse } from '@core/RRmodel/response/address';
import { IResponseModel } from '@core/RRmodel/response';

export interface IReadAddressPresenter {
    presentReadAddress  (response   : IResponseModel<ReadAddressResponse>)   : void;
}
