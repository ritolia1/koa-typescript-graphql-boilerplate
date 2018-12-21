import koa from 'koa';
import { getLoggerInstance } from '../../../modules/logger';
import { convertKoaToApplicationContext, IApplicationContext } from '../../utility/helper';
import { HotelService } from '../../services/hotel.service';
import { UserService } from '../../services/user.service';
import { BookingService } from '../../services/booking.service';

const logger = getLoggerInstance('resolver', 'root-resolver');

/**
 * All the root level resolvers will be under the shade of Query and mutation
 * In case if this file become longer, split Query and mutation to separate file
 */
const rootResolvers = {
  Query: {
    async getAllHotels(obj: any, args: any, ctx: koa.Context) {
      const appContext: IApplicationContext = convertKoaToApplicationContext(ctx);
      logger.info(appContext.requestId, 'accessing get all hotels resolver', {
        payload: ctx.request.body,
        arguments: args,
      });
      return HotelService.getAllHotelsDetails(appContext, null, args.options);
    },

    async getUserData(obj: any, args: any, ctx: koa.Context) {
      const appContext: IApplicationContext = convertKoaToApplicationContext(ctx);
      logger.info(appContext.requestId, 'accessing get User Info', {
        payload: ctx.request.body,
        arguments: args,
      });
      return UserService.getUserData(appContext, args.input, null);
    },

    async getDraftBookingDetail(obj: any, args: any, ctx: koa.Context) {
      const appContext: IApplicationContext = convertKoaToApplicationContext(ctx);
      logger.info(appContext.requestId, 'accessing get draft booking detail', {
        payload: ctx.request.body,
        arguments: args,
      });
      return BookingService.getDraftBookingDetails(appContext, args.input, args.options);
    },

    async getCompletedBookingDetail(obj: any, args: any, ctx: koa.Context) {
      const appContext: IApplicationContext = convertKoaToApplicationContext(ctx);
      logger.info(appContext.requestId, 'accessing get completed booking detail', {
        payload: ctx.request.body,
        arguments: args,
      });
      return BookingService.getCompletedBookingDetails(appContext, args.input, args.options);
    },

    async getBookingDetail(obj: any, args: any, ctx: koa.Context) {
      const appContext: IApplicationContext = convertKoaToApplicationContext(ctx);
      logger.info(appContext.requestId, 'accessing all booking detail', {
        payload: ctx.request.body,
        arguments: args,
      });
      return BookingService.getBookingDetails(appContext, args.input, args.options);
    }
  },
};

export default rootResolvers;
