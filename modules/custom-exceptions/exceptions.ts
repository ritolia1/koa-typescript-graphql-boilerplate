import { ApplicationException } from './application-exception';
import * as HttpStatus from 'http-status-codes';

export class NotFoundException extends ApplicationException {
  constructor(
    message = HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
    code = HttpStatus.NOT_FOUND) {
    super(message, code);
  }
}

export class EmptyValueException extends ApplicationException {
  constructor(
    message = HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
    code = HttpStatus.BAD_REQUEST) {
    super(message, code);
  }
}

export class InvalidValueException extends ApplicationException {
  constructor(
    message = HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
    code = HttpStatus.BAD_REQUEST) {
    super(message, code);
  }
}

export class InvalidInputException extends ApplicationException {
  constructor(
    message = HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
    code = HttpStatus.BAD_REQUEST) {
    super(message, code);
  }
}

export class DuplicateValueException extends ApplicationException {
  constructor(
    message = HttpStatus.getStatusText(HttpStatus.CONFLICT),
    code = HttpStatus.CONFLICT) {
    super(message, code);
  }
}

export class InvalidStateException extends ApplicationException {
  constructor(
    message = HttpStatus.getStatusText(HttpStatus.CONFLICT),
    code = HttpStatus.CONFLICT) {
    super(message, code);
  }
}

export class AuthFailedException extends ApplicationException {
  constructor(
    message = HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED),
    code = HttpStatus.UNAUTHORIZED) {
    super(message, code);
  }
}

export class AccessDeniedException extends ApplicationException {
  constructor(
    message = HttpStatus.getStatusText(HttpStatus.FORBIDDEN),
    code = HttpStatus.FORBIDDEN) {
    super(message, code);
  }
}
