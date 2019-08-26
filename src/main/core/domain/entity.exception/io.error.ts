import { EntityGatewayError } from "../entity.exception";

export class IOError extends EntityGatewayError {
    constructor(message : string,code:number) {
      super(message,code);
    }
  }