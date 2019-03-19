import {IRequestModel} from '@core/RRmodel/request';

export interface IAddressReadInteractor {
    get(req:IRequestModel) : Promise<any>;
    getAll(req:IRequestModel ):Promise<any>;
}