import {ReqModel} from '@core/RRmodel'
import {
    IQuery
   } from '@core/domain'

export interface IAddressCRUD {

    get(id : number|string) : Promise<any>;
    getAll(query :IQuery ):Promise<any>;
    create(req : ReqModel.Address.AddressCRUD.CreateBaseModel):Promise<any>;
    update(req : ReqModel.Address.AddressCRUD.UpdateModel) :Promise<any>;
    delete(req: ReqModel.Address.AddressCRUD.DeleteModel):Promise<any>;

}
