import { IJwtParser,JwtToken } from "@core";


import {
    inject,
    injectable
} from '@core'

@injectable()
export default class JwtParser implements IJwtParser{
    constructor(){

    }
    parse(token: string): Promise<JwtToken> {
        throw new Error("Method not implemented.");
    }

}