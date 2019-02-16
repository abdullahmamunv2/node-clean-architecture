import { RRmodel,Domain } from "../..";

export interface IAddressResCRUDMapper{
    create() : RRmodel.ResModel.BaseResponse
    read(param :Domain.Entity.BaseAddress)   : RRmodel.ResModel.BaseResponse
    readAll() : RRmodel.ResModel.BaseResponse
    update() : RRmodel.ResModel.BaseResponse
    delete() : RRmodel.ResModel.BaseResponse
}