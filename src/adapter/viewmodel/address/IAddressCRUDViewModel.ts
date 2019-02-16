import {IOport,RRmodel} from '../../../core';

export interface IAddressCRUDViewModel{
    createdAddress():void;
    readAddress(response: RRmodel.ResModel.BaseResponse) : void;
    readAllAdress() : void;
    deleteAddress() : void;
    updateAddress() : void;
}