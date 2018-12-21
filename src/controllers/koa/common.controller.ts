import { getLoggerInstance } from '../../../modules/logger';
import { IApplicationContext, convertKoaToApplicationContext } from '../../utility/helper';

const logger = getLoggerInstance('controller', 'healthController');

// All those controller which have nothing much impact on application should be part of this file.
export const healthCheckController = async (ctx: any, next: any) => {
  const appContext: IApplicationContext = convertKoaToApplicationContext(ctx);
  logger.info(appContext.requestId, 'health check incoming request');
  ctx.body = 'OK';
  return ctx;
};
