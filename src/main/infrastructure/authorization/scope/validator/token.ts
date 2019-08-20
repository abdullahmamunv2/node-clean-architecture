
import {
    ITokenValidator
} from '@core/authorization'

import {
    inject,
    injectable
} from '@core/di'

@injectable()
export default class JwtTokenValidator implements ITokenValidator {
    validate(token: string): Promise<boolean> {
        return Promise.resolve(true);
    }

}