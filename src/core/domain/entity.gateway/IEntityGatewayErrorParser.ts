import { IErrorParser } from "@core";
import { EntityGatewayError } from "@core";

export default  interface IEntityGatewayErrorParser extends IErrorParser<any,EntityGatewayError[]>{
    
}