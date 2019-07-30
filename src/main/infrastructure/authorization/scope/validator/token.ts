
import {
    ITokenValidator
} from '@core'

import {
    inject,
    injectable
} from '@core'

@injectable()
export default class JwtTokenValidator implements ITokenValidator {
    validate(token: string): Promise<boolean> {
        return Promise.resolve(true);
    }

}