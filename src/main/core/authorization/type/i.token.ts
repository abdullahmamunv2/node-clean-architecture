import {
    TokenAuthRequest,
    TokenAuthResponse,
    IAuthorization
} from '@core'


export default interface ITokenBasedAuthorization extends IAuthorization<TokenAuthRequest,TokenAuthResponse>{
    
}