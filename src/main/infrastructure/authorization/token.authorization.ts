
import {
    TokenAuthRequest,
    TokenAuthResponse,
    IScopeGateway,
    ITokenBasedAuthorization,
    IScopeValidator,
    IJwtParser
} from '@core/authorization'

import {
    TYPE_AUTHORIZATION
} from '@core/di'




import {
        inject,
        injectable
    } from '@core/di'

@injectable()
export class JwtTokenAuthorization implements ITokenBasedAuthorization{
    _scopeGateway : IScopeGateway;
    _scopeValidator : IScopeValidator;
    _jwtTokenParser    : IJwtParser;
    constructor(
            @inject(TYPE_AUTHORIZATION.SCOPE_GATEWAY)
            scopeGateway : IScopeGateway,
            @inject(TYPE_AUTHORIZATION.SCOPE_VALIDAOR)
            scopeValidator : IScopeValidator,
            @inject(TYPE_AUTHORIZATION.TOKEN_PARSER)
            jwtTokenParser : IJwtParser,

        ){
            this._scopeGateway   = scopeGateway;
            this._scopeValidator = scopeValidator;
            this._jwtTokenParser = jwtTokenParser;
    }
    authorize(request: TokenAuthRequest): Promise<TokenAuthResponse> {
        //request.

        return Promise.resolve(new TokenAuthResponse());
    }
    

}