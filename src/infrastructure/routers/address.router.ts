import {Router} from 'express'
import {IOContainer,TYPES,I, E}  from  '@ioc'

let addressRouter = Router();

let controller =IOContainer.get<E.ReadAddressController>(TYPES.ReadAddressController);
console.log(controller);
addressRouter.get('/:id',controller.get.bind(controller))



export default addressRouter;