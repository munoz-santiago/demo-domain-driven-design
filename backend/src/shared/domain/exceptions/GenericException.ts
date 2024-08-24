export default class GenericException extends Error {
    public statusCode: number;
  
    constructor(message: string, statusCode: number = 400) {
      super(message);
      this.name = this.constructor.name;
      this.statusCode = statusCode;
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }