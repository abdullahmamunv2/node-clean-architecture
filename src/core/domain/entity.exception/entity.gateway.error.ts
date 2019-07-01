export class EntityGatewayError extends Error {
    message   : string = "EntityGatewayError";
    code      : number | string;
    timestamp : Date; 
    constructor(message : string,
               code : number | string="UNINITIALIZED",
               timestamp : Date = new Date()) {
      super(message);
      Object.setPrototypeOf(this, EntityGatewayError.prototype);
      Error.captureStackTrace(this, this.constructor);
      this.code = code;
      this.timestamp = timestamp;
      this.name = this.constructor.name;
    }
  }