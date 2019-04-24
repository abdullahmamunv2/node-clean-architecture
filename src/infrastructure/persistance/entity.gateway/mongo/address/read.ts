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
import { Address,AddressDocument,AddressModel } from '@db/mongo/schema'
import { BaseAddress } from '@core/domain/entity';
import { IEntityGatewayErrorParser, EntityGatewayResponse } from '@core/domain/entity.gateway';
import { ERROR_TYPE, EntityGatewayError } from '@core/exceptions';
import ResponseError from '@core/exceptions/ErrorResponse';

@injectable()
export default class ReadAddressGateWay implements IReadAddressGateWay {
    private errorParser : IEntityGatewayErrorParser;
    constructor(
        @inject(TYPES.MongoErrorParser)  errorParser : IEntityGatewayErrorParser
        ){
            this.errorParser = errorParser;
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
        
        let addressDocument : AddressDocument | null=null;
        try{
            addressDocument = await Address.findById(id);
        }catch(error){
            let errors = this.errorParser.generate(error);
            let errorResponse   = new ResponseError<EntityGatewayError>(ERROR_TYPE.INTERNAL_SERVER_ERROR,this.errorParser.generate(errors));
            throw new EntityGatewayResponse(errorResponse);
        }
        if(addressDocument == null){
            let errorResponse   = new ResponseError<EntityGatewayError>(ERROR_TYPE.NO_DATA_FOUND);
            throw new EntityGatewayResponse(errorResponse);
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


}
