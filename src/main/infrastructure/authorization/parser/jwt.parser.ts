import { IJwtParser,JwtToken } from "@core/authorization";


import {
    inject,
    injectable
} from '@core/di'

@injectable()
export default class JwtParser implements IJwtParser{
    constructor(){

    }
    parse(token: string): Promise<JwtToken> {
        throw new Error("Method not implemented.");
    }

}