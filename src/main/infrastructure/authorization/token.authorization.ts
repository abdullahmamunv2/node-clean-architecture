
import {
    IAuthorization,
    TokenAuthRequest,
    TokenAuthResponse,
    IScopeGateway
} from '@core'

import {
    CORE_TYPE
} from '@core'




import {
        inject,
    injectable} from '@core'

injectable()
/*export class TokenAuthorization implements IAuthorization<TokenAuthRequest,TokenAuthResponse>{
    _scopeGateway : IScopeGateway;
    constructor(){
        @inject(CORE_TYPE.TYPE_AUTHORIZATION.SCOPE_GATEWAY)
        _scopeGateway : IScopeGateway = 
        }
    }
    authorize(request: TokenAuthRequar): Promise<TokenAuthResponse> {
        throw new Error("Method not implemented.");
    }

}*/