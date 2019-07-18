import { EntityGatewayError } from "./entity.gateway.error";

export class BadRequest extends EntityGatewayError {
    constructor(message : string,code:any) {
      super(message,code);
    }
  }