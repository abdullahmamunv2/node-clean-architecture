import {IRequestModel} from '@core/RRmodel/request';

export interface IReadAddressInteractor {
    get(req:IRequestModel) : Promise<any>;
    getAll(req:IRequestModel ):Promise<any>;
}