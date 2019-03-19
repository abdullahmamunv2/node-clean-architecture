import {Router} from 'express'

let addressRouter = Router();


import { AddressReadPresenter} from "@adapter/presenter/address"
import { AddressReadMapper} from "@infrastructure/mapper/response/address"
import {AddressController}  from "@adapter/controller"
import {AddressGateway}   from '@entity.gateway/mongo'


let presenter = new AddressReadPresenter();
let mapper =  new AddressReadMapper();
let addressGateway   = new AddressGateway();
let controller = new AddressController(addressGateway,presenter,mapper);

addressRouter.use('/:id',controller.get)

export default addressRouter;