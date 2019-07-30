
import {
    TokenAuthRequest,
    TokenAuthResponse,
    IScopeGateway,
    ITokenBasedAuthorization,
    IScopeValidator,
    IJwtParser
} from '@core'

import {
    CORE_TYPE
} from '@core'




import {
        inject,
        injectable
    } from '@core'

@injectable()
export class JwtTokenAuthorization implements ITokenBasedAuthorization{
    _scopeGateway : IScopeGateway;
    _scopeValidator : IScopeValidator;
    _jwtTokenParser    : IJwtParser;
    constructor(
            @inject(CORE_TYPE.TYPE_AUTHORIZATION.SCOPE_GATEWAY)
            scopeGateway : IScopeGateway,
            @inject(CORE_TYPE.TYPE_AUTHORIZATION.SCOPE_VALIDAOR)
            scopeValidator : IScopeValidator,
            @inject(CORE_TYPE.TYPE_AUTHORIZATION.TOKEN_PARSER)
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