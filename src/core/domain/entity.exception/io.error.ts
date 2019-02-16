import { EntityGatewayError } from ".";

export class IOError extends EntityGatewayError {
    constructor(message : string,code:number=500) {
      super(message,code);
    }
  }