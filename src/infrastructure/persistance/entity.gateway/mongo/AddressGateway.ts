import 'automapper-ts/dist/automapper';
import {
    IEntityGateway,
    Entity,
    EntityException,
    IQuery} from '@core/domain'

import { handleError } from '@db/mongo'
import { Address,AddressDocument,AddressModel } from '@db/mongo/schema'


export default class AddressGateWay implements IEntityGateway.IAddressGateWay {
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
        let address : AddressDocument | null=null;
        try{
            address = await Address.findById(id);
        }catch(error){
            throw handleError(error);
        }
        if(address == null){
            throw new EntityException.NoResourceFoundError('Address not found',404);
        }

        if(address.isUrban()){
            let entityAddress         = new Entity.UrbanAddress();
            entityAddress.id          = address._id;
            entityAddress.countryName = address.countryName;
            entityAddress.countryCode = address.countryCode;  
            entityAddress.type        = address.type;

            entityAddress.streetName  = address.streetName;
            entityAddress.streetNumber= address.streetNumber;
            entityAddress.TownName    = address.TownName;
            entityAddress.postalCode  = address.postalCode;

            return entityAddress;
        }
        else{
            let entityAddress         = new Entity.RuralAddress();
            entityAddress.id          = address._id;
            entityAddress.countryName = address.countryName;
            entityAddress.countryCode = address.countryCode;  
            entityAddress.type        = address.type;

            entityAddress.village     = address.village;
            entityAddress.postOffice  = address.postOffice;
            entityAddress.thana       = address.thana;
            entityAddress.district    = address.district;
            return entityAddress;
        }
    }    
    getAll(query: IQuery): Promise<Entity.BaseAddress[]> {
        throw new Error("Method not implemented.");
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
            console.log(error);
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
