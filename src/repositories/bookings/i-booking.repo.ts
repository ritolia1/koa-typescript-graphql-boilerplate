import { IApplicationContext } from '../../utility/helper';

interface IBookingRepo {
  getTypeBookingDetails(userId: String, type: String, appContext: IApplicationContext): any;
  getBookingDetails(userId: String, appContext: IApplicationContext): any;

  postBooking(
    params: any, userId: String, draftBookingId: String, appContext: IApplicationContext): any;
}

export { IBookingRepo as default };
