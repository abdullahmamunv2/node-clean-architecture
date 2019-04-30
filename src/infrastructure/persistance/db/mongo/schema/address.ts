import { Document, Schema, Model, model} from "mongoose";

import {AddressModel}  from '@entity.gateway/model'

export interface AddressDocument extends AddressModel,Document{
  createdAt?  : Date|null;
  updatedAt?  : Date|null;
}


var AddressSchema: Schema = new Schema({
    
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

AddressSchema.pre<AddressDocument>("save", function(next) {
    let now = new Date();
    if (!this.createdAt) {
      this.createdAt = now;
    }
    next();
});

AddressSchema.pre<AddressDocument>("update", function(next) {
    let now = new Date();
    if (!this.updatedAt) {
      this.updatedAt = now;
    }
    next();
});

export const Address: Model<AddressDocument> = model<AddressDocument>("Address", AddressSchema);

