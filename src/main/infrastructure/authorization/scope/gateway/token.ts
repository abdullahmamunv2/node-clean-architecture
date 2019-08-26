
import {
    IScopeGateway
} from '@core/authorization'

import {
    AuthorizationError
} from '@core/errors'


import {
    inject,
    injectable
} from '@core/di'

@injectable()
export default class TokenScopeGateway implements IScopeGateway {
    get(resourceId: string): Promise<string[]> {
        return Promise.resolve(['profile','email'])
    }

}