import logger from './logger';

export interface IRequestId {
  requestId: string;
}

export class LoggerWrapper {
  private fileName: string;
  private moduleName: string;

  constructor(moduleName: string, fileName: string) {
    this.fileName = fileName;
    this.moduleName = moduleName;
  }

  fatal(requestId: IRequestId, message: string, otherParams?: any) {
    logger.log({
      ...requestId,
      message,
      otherParams,
      level: 'fatal',
      moduleName: this.moduleName,
      fileName: this.fileName,
    });
  }

  error(requestId: IRequestId, message: string, otherParams?: any) {
    logger.log({
      ...requestId,
      message,
      otherParams,
      level: 'error',
      moduleName: this.moduleName,
      fileName: this.fileName,
    });
  }

  warn(requestId: IRequestId, message: string, otherParams?: any) {
    logger.log({
      ...requestId,
      message,
      otherParams,
      level: 'warn',
      moduleName: this.moduleName,
      fileName: this.fileName,
    });
  }

  info(requestId: IRequestId, message: string, otherParams?: any) {
    logger.log({
      ...requestId,
      message,
      otherParams,
      level: 'info',
      moduleName: this.moduleName,
      fileName: this.fileName,
    });
  }

  debug(requestId: IRequestId, message: string, otherParams?: any) {
    logger.log({
      ...requestId,
      message,
      otherParams,
      level: 'debug',
      moduleName: this.moduleName,
      fileName: this.fileName,
    });
  }

  trace(requestId: IRequestId, message: string, otherParams?: any) {
    logger.log({
      ...requestId,
      message,
      otherParams,
      level: 'trace',
      moduleName: this.moduleName,
      fileName: this.fileName,
    });
  }
}
