// Loads the contents of .env file in the project root to App Environment
require('dotenv').config();

import koa from 'koa';
import koaHelmet from 'koa-helmet';
import koa2Cors from 'koa2-cors';
import koaBodyParser from 'koa-bodyparser';
import * as HttpStatus from 'http-status-codes';

import { router } from './src/routes';
import { getLoggerInstance, IRequestId } from './modules/logger';
import { NotFoundException } from './modules/custom-exceptions';
import {
  generateRequestId,
} from './src/utility/helper';

const logger = getLoggerInstance('server', 'server');

const app = new koa();

app.use(async (ctx, next) => {
  try {
    const requestIdObj: IRequestId = {
      requestId: ctx.request.headers['request-id'] || generateRequestId(),
    };
    if (!ctx.request.headers['request-id']) {
      ctx.request.headers['request-id'] = requestIdObj.requestId;
    }
    // logging incoming request
    logger.info(requestIdObj, 'incoming request details', {
      method: ctx.method,
      url: ctx.originalUrl,
      userId: ctx.cookies.get('auth-id') || '',
      referer: ctx.request.header.referer,
      payload: ctx.request.body || {},
    });
    await next();
    // logging outgoing details
    logger.info(requestIdObj, 'response returned', {
      payload: ctx.response.body,
      userId: ctx.cookies.get('auth-id') || '',
    });
    if (ctx.status === HttpStatus.NOT_FOUND) {
      ctx.app.emit('error', new NotFoundException(), ctx);
    }
  } catch (err) {
    ctx.app.emit('error', err, ctx);
  }
});

app.on('error', (err, ctx) => {
  const requestIdObj: IRequestId = {
    requestId: ctx.request.headers['request-id'],
  };
  logger.error(requestIdObj, err.message, {
    method: ctx.request.method,
    url: ctx.request.url,
    payload: ctx.request.body,
    error_code: err.code,
    trace: err.stack,
    userId: ctx.cookies.get('auth-id') || '',
  });
  ctx.status = err.code ? err.code : HttpStatus.INTERNAL_SERVER_ERROR;
  ctx.body = {
    status: err.code,
    message: err.message,
    data: null,
  };
});

app.on('success', (ctx, data, message) => {
  ctx.status = HttpStatus.OK;
  ctx.body = {
    data,
    status: HttpStatus.OK,
    message: message ? message : 'Success',
  };
  const requestIdObj: IRequestId = {
    requestId: ctx.request.headers['request-id'],
  };
  logger.info(requestIdObj, 'response returned', {
    payload: ctx.body,
    userId: ctx.cookies.get('auth-id') || '',
  });
});

app.use(koaHelmet())
  .use(koa2Cors())
  .use(koaBodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

const requestIdObj: IRequestId = {
  requestId: generateRequestId(),
};

const PORT = process.env.PORT || 3000;
app.listen(PORT);
logger.info(requestIdObj, `server started on port: ${PORT}`);

const mockMode = process.env.MOCK_MODE || false;
logger.info(requestIdObj, `server started in MOCK_MODE: ${mockMode}`);
