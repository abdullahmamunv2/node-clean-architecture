import { EntityGatewayError } from "./entity.gateway.error";

export class AuthenticationError extends EntityGatewayError {
    constructor(message : string,code:any) {
      super(message,code);
    }
  }