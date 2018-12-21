import * as HttpStatus from 'http-status-codes';

export class ApplicationException extends Error {
  code: number = HttpStatus.INTERNAL_SERVER_ERROR;
  constructor(message: string, code = HttpStatus.INTERNAL_SERVER_ERROR) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}
