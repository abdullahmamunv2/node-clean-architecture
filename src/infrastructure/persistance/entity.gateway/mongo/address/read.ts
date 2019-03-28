import 'automapper-ts/dist/automapper';
const mongoose = require('mongoose');
import { injectable, inject } from "inversify";
import "reflect-metadata";
import {
    Entity,
    EntityException,
    IQuery} from '@core/domain'

import {IReadAddressGateWay} from '@core/domain/entity.gateway/address'

import { handleError } from '@db/mongo'
import { Address,AddressDocument,AddressModel } from '@db/mongo/schema'
import { BaseAddress } from '@core/domain/entity';

@injectable()
export default class ReadAddressGateWay implements IReadAddressGateWay {
    constructor(){
        automapper.createMap('UrbanAddress', 'AddressModel')
                  .convertToType(AddressModel);
        
        automapper.createMap('RuralAddress', 'AddressModel')
                  .convertToType(AddressModel);

        automapper.createMap( 'AddressModel','RuralAddress')
                  .convertToType(Entity.RuralAddress);
        automapper.createMap( 'AddressModel','UrbanAddress')
        .convertToType(Entity.UrbanAddress);
    }
    async get(id: string | number): Promise<Entity.BaseAddress> {

        if(!mongoose.Types.ObjectId.isValid(id)) {
            console.log('invalid id')
        }
        
        let addressDocument : AddressDocument | null=null;
        try{
            addressDocument = await Address.findById(id);
            
        }catch(error){
            //console.log(error);
            throw handleError(error);
        }
        if(addressDocument == null){
            throw new EntityException.NoResourceFoundError('Address not found',404);
        }
        let addressModelSource : BaseAddress;

        if(addressDocument.isUrban()){
            addressModelSource = automapper.map('AddressModel','UrbanAddress',addressDocument as AddressModel);
        } 
        else{
            addressModelSource = automapper.map('AddressModel','RuralAddress',addressDocument as AddressModel);
        }
        addressModelSource.id = addressDocument.id;
        return addressModelSource;
    }    
    async create(address: Entity.BaseAddress): Promise<Entity.BaseAddress> {
        let addressModelSource : AddressModel;
        if(address.isUrban()){
            addressModelSource = automapper.map('UrbanAddress', 'AddressModel',address);
        } 
        else{
            addressModelSource = automapper.map('RuralAddress', 'AddressModel',address);
        }
        try{
            let returnAddress : AddressDocument = await Address.create(addressModelSource);
            address.id = returnAddress._id;
            return address;

        }catch(error){
            throw handleError(error);
        }

    }
    update(address: Entity.BaseAddress): Promise<Entity.BaseAddress> {
        throw new Error("Method not implemented.");
    }
    remove(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }


}
