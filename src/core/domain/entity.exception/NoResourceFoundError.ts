import { EntityGatewayError } from ".";

export class NoResourceFoundError extends EntityGatewayError {
    constructor(message : string,code:number|string) {
      super(message,code);
    }
  }