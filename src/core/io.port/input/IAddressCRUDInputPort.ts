import {ReqModel}       from '../../RRmodel';
import {IQuery}          from '../../domain';

export interface IAddressCRUD {

    get(id : number) : Promise<any>;
    getAll(query :IQuery ):Promise<any>;
    create(req : ReqModel.Address.AddressCRUD.CreateBaseModel):Promise<any>;
    update(req : ReqModel.Address.AddressCRUD.UpdateModel) :Promise<any>;
    delete(req: ReqModel.Address.AddressCRUD.DeleteModel):Promise<any>;

}
