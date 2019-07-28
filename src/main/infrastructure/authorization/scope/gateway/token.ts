
import {
    IScopeGateway
} from '@core'

import {
    inject,
    injectable
} from '@core'

export class TokenScopeGateway implements IScopeGateway {
    scopes : {
        '1234' : ['scope1','scope2']
    }
    get(resourceId: string): Promise<string[]> {
        if(this.scopes[resourceId]){
            return Promise.resolve(this.scopes[resourceId]);
        }
    }

}