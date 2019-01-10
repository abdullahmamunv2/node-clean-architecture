import { ResponseError } from "./ResponseError";

export class IOError extends ResponseError {
    constructor(message : string,code:number=404) {
      super(message,code);
    }
  }