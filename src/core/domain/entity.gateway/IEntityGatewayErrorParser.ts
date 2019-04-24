import { IErrorParser } from "@core/exceptions";
import { EntityGatewayError } from "@core/exceptions/";

export default interface IEntityGatewayErrorParser extends IErrorParser<any,EntityGatewayError[]>{
    
}