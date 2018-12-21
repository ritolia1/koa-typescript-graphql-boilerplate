import uuidV4 from 'uuid/v4';
import koa from 'koa';
import { IRequestId } from '../../modules/logger';

export interface IGenericObject {
  [key: string]: string;
}

export interface IApplicationContext {
  requestId: IRequestId;
  authId?: string;
  authBearer?: string;
  otherParams?: any;
}

/**
 * generate Random UUID v4
 */
export function generateRequestId(): string {
  return uuidV4();
}

/**
 * Generate Application Context from koa context.
 * Reason: To remove direct dependency with koa framework.
 * 
 * @param ctx 
 */
export function convertKoaToApplicationContext(ctx: koa.Context, params?: any):
  IApplicationContext {

  const requestIdObj: IRequestId = {
    requestId: ctx.request.headers['request-id'] || generateRequestId(),
  };
  const appContext = {
    authId: ctx.cookies.get('auth-id') || '',
    authBearer: ctx.cookies.get('auth-bearer') || '',
    requestId: requestIdObj,
    otherParams: params,
  };
  return appContext;
}

/**
 * Returning paginated output (data, metaData)
 * 
 * @param data 
 * @param limit 
 * @param offset 
 */
export function formatPaginationOutput(
  data: [], limit: number | undefined, offset: number | undefined) {

  if (!data || !data.length) {
    return null;
  }

  const dataSize: number = offset || 0;
  const totalCount = data.length;
  const output = (limit === undefined) ?
    data.slice(dataSize) : data.slice(dataSize, dataSize + limit);

  const result = {
    data: output,
    metaData: {
      limit,
      totalCount,
      offset: dataSize,
    }
  };
  return result;
}
