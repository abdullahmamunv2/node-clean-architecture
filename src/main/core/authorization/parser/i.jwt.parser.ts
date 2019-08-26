import { ITokenParser } from "@core/authorization";
import { JwtToken } from "@core/authorization";


export default interface IJwtParser extends ITokenParser<JwtToken>{

}