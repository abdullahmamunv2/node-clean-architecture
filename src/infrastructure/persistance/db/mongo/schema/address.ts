import { Document, Schema, Model, model} from "mongoose";
import IAddress from "../interface/Iaddress";

export interface IAddressModel extends IAddress, Document {
    createdAt    : Date,
    updatedAt    : Date,
    isUrban() : boolean
}


var AddressSchema: Schema = new Schema({
    
    _id          : String,
    countryName : String,
    countryCode : String,
    type        : String,

    village     : String,
    postOffice  : String,
    thana       : String,
    district    : String,

    streetName   : String,
    streetNumber : Number,
    TownName     : String,
    postalCode   : Number
});

AddressSchema.pre<IAddressModel>("save", function(next) {
    let now = new Date();
    if (!this.createdAt) {
      this.createdAt = now;
    }
    next();
});

AddressSchema.pre<IAddressModel>("update", function(next) {
    let now = new Date();
    if (!this.updatedAt) {
      this.updatedAt = now;
    }
    next();
});

AddressSchema.methods.isUrban = function():boolean{
    return this.type === 'urban';
}

export const Address: Model<IAddressModel> = model<IAddressModel>("Address", AddressSchema);