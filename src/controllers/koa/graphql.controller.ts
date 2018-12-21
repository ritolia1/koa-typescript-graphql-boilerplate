import koa from 'koa';
import koaGraphql from 'koa-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { getLoggerInstance, IRequestId } from '../../../modules/logger';
import resolvers from '../graphql';
import typeDefs from '../../models/graphql';

const logger = getLoggerInstance('controller', 'graphQlController');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

/**
 * Initializing the graphql controller.
 * 
 * TODO: need to format response structure being returned
 * error should be part of data itself instead of separate key.
 * Need better way to respond when unable to connect to external service.
 * 
 * Graphiql should not be enabled in production.
 */
export default koaGraphql(async (request: any, response: any, context: any) => {
  const startTime = Date.now();
  const requestIdObj: IRequestId = {
    requestId: context.request.headers['request-id'],
  };
  logger.info(requestIdObj, 'graphql incoming request', {
    payload: context.request.body,
  });
  return {
    schema,
    graphiql: !(process.env.NODE_ENV === 'production'),
    formatError(err: any, ctx: koa.Context) {
      let errMsg = 'error occurred while making graphQl call';
      if (err.message) {
        errMsg = err.message;
      }
      logger.error(requestIdObj, errMsg, {
        method: ctx.request.method,
        url: ctx.request.url,
        payload: ctx.request.body,
        status: err.originalError && err.originalError.code,
        trace: err.stack,
        fields: err.path,
      });
      return {
        message: errMsg,
        status_code: err.originalError && err.originalError.code,
        fields: err.path,
        trace: !(process.env.NODE_ENV === 'production') && err.stack ?
          err.stack.split('\n') : [],
      };
    },
    extensions({ document, variables, operationName, request }: any) {
      return { runTime: Date.now() - startTime }; // returning time taken to execute graphql query
    }
  };
});
