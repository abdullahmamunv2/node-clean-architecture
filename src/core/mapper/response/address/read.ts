import {ResModel} from '@core/RRmodel'
import {
    Entity
   } from '@core/domain'
import { IResponseModel } from '@core/RRmodel/response';

export default interface IReadAdddressResposeMapper{
    read(param :Entity.BaseAddress)   : IResponseModel
}