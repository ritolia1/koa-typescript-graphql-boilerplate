import { LoggerWrapper } from '../../modules/logger';

abstract class BaseRepo {
  protected logger: LoggerWrapper;
  constructor(args: any, logger: LoggerWrapper) {
    this.logger = logger;
  }
}

export { BaseRepo as default };
