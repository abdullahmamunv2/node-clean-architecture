import {
    TokenAuthRequest,
    TokenAuthResponse,
    IAuthorization
} from '@core/authorization'


export default interface ITokenBasedAuthorization extends IAuthorization<TokenAuthRequest,TokenAuthResponse>{
    
}