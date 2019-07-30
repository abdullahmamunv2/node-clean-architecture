
import {
    IScopeGateway, AuthorizationError
} from '@core'

import {
    inject,
    injectable
} from '@core'

@injectable()
export default class TokenScopeGateway implements IScopeGateway {
    get(resourceId: string): Promise<string[]> {
        return Promise.resolve(['profile','email'])
    }

}