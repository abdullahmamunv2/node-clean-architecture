import {Router} from 'express'
import {IOContainer,TYPES, E}  from  '@ioc'

let addressRouter = Router();

let controller =IOContainer.get<E.ReadAddressController>(TYPES.ReadAddressController);
addressRouter.get('/:id',controller.get.bind(controller))



export default addressRouter;