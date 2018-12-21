import { RepositoryFactory } from '../repositories';
import { IApplicationContext, formatPaginationOutput } from '../utility/helper';
import { BOOKING_TYPE } from '../constants';

const bookingRepo = RepositoryFactory.getBookingRepo();

export const BookingService = {
  async getDraftBookingDetails(appContext: IApplicationContext, queryParams: any, options?: any) {
    const bookingDetails =
      await bookingRepo.getTypeBookingDetails(queryParams.userId, BOOKING_TYPE.DRAFT, appContext);
    if (bookingDetails && bookingDetails.data) {
      if (options) {
        return formatPaginationOutput(bookingDetails.data, options.limit, options.offset);
      }
      return bookingDetails;
    }
    return null;
  },

  async getCompletedBookingDetails(
    appContext: IApplicationContext, queryParams: any, options?: any) {

    const bookingDetails = await bookingRepo.getTypeBookingDetails(
      queryParams.userId, BOOKING_TYPE.COMPLETED, appContext);

    if (bookingDetails && bookingDetails.data) {
      if (options) {
        return formatPaginationOutput(bookingDetails, options.limit, options.offset);
      }
      return bookingDetails;
    }
    return null;
  },

  async getBookingDetails(
    appContext: IApplicationContext, queryParams: any, options?: any) {

    const bookingDetails = await bookingRepo.getBookingDetails(queryParams.userId, appContext);
    if (bookingDetails && bookingDetails.data) {
      if (options) {
        return formatPaginationOutput(bookingDetails, options.limit, options.offset);
      }
      return bookingDetails;
    }
    return null;
  },
};
