import { 
    IErrorParser,
    EntityGatewayError
} from "@core/errors";

export default  interface IEntityGatewayErrorParser extends IErrorParser<any,EntityGatewayError[]>{
    
}