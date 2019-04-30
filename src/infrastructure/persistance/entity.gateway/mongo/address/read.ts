import 'automapper-ts/dist/automapper';
const mongoose = require('mongoose');
import { injectable, inject } from "@core/di";
import "reflect-metadata";
import {
    Entity,
    EntityException,
    IQuery} from '@core/domain'

import {TYPES} from '@ioc'

import {IReadAddressGateWay} from '@core/domain/entity.gateway/address'

import { handleError } from '@db/mongo'
import { Address,AddressDocument } from '@db/mongo/schema'
import {AddressModel}  from '@entity.gateway/model'
import { BaseAddress } from '@core/domain/entity';
import { IEntityGatewayErrorParser, EntityGatewayResponse } from '@core/domain/entity.gateway';
import { ERROR_TYPE, EntityGatewayError } from '@core/exceptions';
import ResponseError from '@core/exceptions/ErrorResponse';
import IMongoRepository from '@db/mongo/repository/IMongoRepository';

@injectable()
export default class ReadAddressGateWay implements IReadAddressGateWay {
    private  addressRepository : IMongoRepository<AddressModel>;
    private errorParser : IEntityGatewayErrorParser;
    constructor(
        @inject(TYPES.MongoErrorParser)  errorParser : IEntityGatewayErrorParser,
        @inject(TYPES.AddressRepository)  addressRepository : IMongoRepository<AddressModel>,

        ){
            this.errorParser = errorParser;
            this.addressRepository = addressRepository;
        automapper.createMap('UrbanAddress', 'AddressModel')
                  .forMember('Id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('id'))
                  .convertToType(AddressModel)
                  
        
        automapper.createMap('RuralAddress', 'AddressModel')
                  .forMember('Id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('id'))
                  .convertToType(AddressModel);

        automapper.createMap( 'AddressModel','RuralAddress')
                  .forMember('id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('Id'))
                  .convertToType(Entity.RuralAddress);
        automapper.createMap( 'AddressModel','UrbanAddress')
                  .forMember('id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('Id'))
                  .convertToType(Entity.UrbanAddress);
    }
    async get(id: string): Promise<Entity.BaseAddress> {
        
        let address : AddressModel | null=null;
        try{
            address = await this.addressRepository.read(id);
            console.log(address);
        }catch(error){
            let errors = this.errorParser.generate(error);
            let errorResponse   = new ResponseError<EntityGatewayError>(ERROR_TYPE.INTERNAL_SERVER_ERROR,this.errorParser.generate(errors));
            throw new EntityGatewayResponse(errorResponse);
        }
        if(address == null){
            let errorResponse   = new ResponseError<EntityGatewayError>(ERROR_TYPE.NO_DATA_FOUND);
            throw new EntityGatewayResponse(errorResponse);
        }
        let addressModelSource : BaseAddress;

        if(address.type=='urban'){
            addressModelSource = automapper.map('AddressModel','UrbanAddress',address);
        } 
        else{
            addressModelSource = automapper.map('AddressModel','RuralAddress',address);
        }
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


}
