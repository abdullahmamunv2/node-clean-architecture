import {AuthorizationError} from "@core/errors";
import { ErrorResponse } from "@core/errors";

export default class AuthErrorResponse extends ErrorResponse<AuthorizationError>{
    
}