import IOutputResponseModel from "./IOutputResponseModel";

export default interface IResponseModel<T> extends IOutputResponseModel{
    getBody()   : T;
}