import IMongoRepository from "./IMongoRepository";
import { IQuery } from "@core/domain";
import {AddressModel}  from '@entity.gateway/model'
import { injectable } from "@core/di";
import {Error} from "mongoose";

@injectable()
export default class AddressRepository implements IMongoRepository<AddressModel>{

    addresses : AddressModel[] = [
        {
            Id : "5c6f217412d1a4283ccd5e00",
            countryName: "Bangladesh",
            countryCode: "BD",
            type: "urban",
            streetName: "",
            streetNumber: 0,
            TownName: "",
            postalCode: 0,
            village     : "String",
            postOffice  : "String",
            thana       : "String",
            district    : "String",
        },
        {
            Id : "5c6f217412d1a4283ccd5e01",
            countryName: "Bangladesh",
            countryCode: "BD",
            type: "urban",
            streetName: "",
            streetNumber: 0,
            TownName: "",
            postalCode: 0,
            village     : "String",
            postOffice  : "String",
            thana       : "String",
            district    : "String",
        }
    ];
    async readAll(query: IQuery): Promise<AddressModel[]> {
        throw new Error("Method not implemented.");
    }    
    async read(id: string): Promise<AddressModel|null> {
        //throw new Error("Method not implemented.");
        let address = this.addresses.find((address)=>{
            return address.Id == id;
        }) || null;

        return address;

    }
    async create(entity: AddressModel): Promise<AddressModel> {
        throw new Error("Method not implemented.");
    }
    async update(entity: AddressModel): Promise<AddressModel> {
        throw new Error("Method not implemented.");
    }
    async delete(entity: AddressModel): Promise<AddressModel> {
        throw new Error("Method not implemented.");
    }



}