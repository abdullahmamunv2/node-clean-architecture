import {BaseAddress} from '../entity';
import { IQuery } from '../query.builder';
export interface IAddressGateWay {
    get(id : number | string) : Promise<BaseAddress>
    getAll(query : IQuery) : Promise<BaseAddress[]>
    create(address : BaseAddress) : Promise<BaseAddress>
    update(address : BaseAddress) : Promise<BaseAddress>
    remove(id:number) : Promise<boolean>
}
