import { Document, Schema, Model, model} from "mongoose";

export class AddressModel {
  public countryName  : string = "";
  public countryCode  : string = "";
  public type         : string = "";

  public streetName   : string   ="";
  public streetNumber : number = 0;
  public TownName     : string = "";
  public postalCode   : number   = 0;

  public village      :string = "";
  public postOffice   :string = "";
  public thana        :string = "";
  public district     :string ="";

}

export interface AddressDocument extends AddressModel,Document{
  createdAt?  : Date|null;
  updatedAt?  : Date|null;
  isUrban() : boolean;
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

AddressSchema.methods.isUrban = function():boolean{
    return this.type === 'urban';
}

export const Address: Model<AddressDocument> = model<AddressDocument>("Address", AddressSchema);