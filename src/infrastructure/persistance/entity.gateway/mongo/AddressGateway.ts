import 'automapper-ts/dist/automapper';
import {
    IEntityGateway,
    Entity,
    EntityException,
    IQuery} from '@core/domain'

import { Address,IAddressModel,handleError } from '@db/mongo'


export default class AddressGateWay implements IEntityGateway.IAddressGateWay {
    constructor(){
        automapper.createMap('UrbanAddress', 'IAddressModel')
                  .convertToType(IAddressModel);
        
        automapper.createMap('RuralAddress', 'IAddressModel')
                  .convertToType(Address);

        automapper.createMap( 'IAddressModel','Entity.RuralAddress')
                  .forSourceMember('_id',(opts:any)=>{

                  }).convertToType(Entity.RuralAddress);
        automapper.createMap( 'IAddressModel','Entity.UrbanAddress')
        .forSourceMember('_id',(opts:any)=>{

        }).convertToType(Entity.UrbanAddress);
    }
    async get(id: string | number): Promise<Entity.BaseAddress> {
        let address : IAddressModel | null=null;
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
        let addressModelSource : Address;
        if(address.isUrban()){
            addressModelSource = automapper.map('Entity.UrbanAddress', 'IAddressModel',address);
        } 
        else{
            addressModelSource = automapper.map('Entity.UrbanAddress', 'IAddressModel',address);
        }
        try{
            addressModelSource = await Address.create(addressModelSource);
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
