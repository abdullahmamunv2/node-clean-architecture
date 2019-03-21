export default class ServerError extends Error {
    message   : string = "EntityGatewayError";
    code      : number | string;
    timestamp : Date; 
    constructor(message : string,
               code : number | string="UNINITIALIZED",
               timestamp : Date = new Date()) {
      super(message);
      Object.setPrototypeOf(this, ServerError.prototype);
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
      this.code = code;
      this.timestamp = timestamp;
      
    }
  }