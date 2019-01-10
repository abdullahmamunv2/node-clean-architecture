import { DomainError } from "./DomainError";

export class ResponseError extends DomainError {
    constructor(message : string,code:any) {
      super(message,code);
    }
  }