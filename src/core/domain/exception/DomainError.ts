export class DomainError extends Error {
    message : string = "DomainError";
    code    : any;
    constructor(message : string,code : any=0) {
      super(message);
      Object.setPrototypeOf(this, DomainError.prototype);
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
      this.code    = code;
      
    }
  }