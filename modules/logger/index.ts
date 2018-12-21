import { LoggerWrapper, IRequestId } from './loggerWrapper';

function getLoggerInstance(moduleName: string, fileName: string): LoggerWrapper {
  return new LoggerWrapper(moduleName, fileName);
}

export { LoggerWrapper, getLoggerInstance, IRequestId };
