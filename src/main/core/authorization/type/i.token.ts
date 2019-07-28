import {
    TokenAuthRequest,
    TokenAuthResponse,
} from '@core'


export default interface ITokenBasedAuthorization {
    authorize(request:TokenAuthRequest):Promise<TokenAuthResponse>
}