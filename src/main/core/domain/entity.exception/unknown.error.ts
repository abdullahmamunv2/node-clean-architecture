import { EntityGatewayError } from "./entity.gateway.error";

export class UnKnownError extends EntityGatewayError {
    constructor(message : string,code:any) {
      super(message,code);
    }
  }