import {ResModel} from '@core/RRmodel'
import {
    Entity
   } from '@core/domain'

export interface IAddressResCRUDMapper{
    create() : ResModel.BaseResponse
    read(param :Entity.BaseAddress)   : ResModel.BaseResponse
    readAll() : ResModel.BaseResponse
    update() : ResModel.BaseResponse
    delete() : ResModel.BaseResponse
}