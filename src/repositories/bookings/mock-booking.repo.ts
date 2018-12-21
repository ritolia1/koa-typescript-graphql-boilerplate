import IRepo from '../i-repo';
import BaseRepo from '../abstract-repo';
import IBookingRepo from './i-booking.repo';
import { IApplicationContext } from '../../utility/helper';
import repositoryFactory from '../repository-factory';

class MockBookingRepo extends BaseRepo implements IBookingRepo, IRepo {

  public async getTypeBookingDetails(
    userId: String, type: String, appContext: IApplicationContext) {

    const UserRepo = repositoryFactory.getUserRepo();

    const userDetail = await UserRepo.getUserData(userId, appContext);
    const userBookingInfo = userDetail.bookings;

    const result = {
      data: null,
    };
    result.data = userBookingInfo.filter((booking: any) => {
      if (booking.status === type) {
        return booking;
      }
      return null;
    });
    return result;
  }

  public async getBookingDetails(userId: String, appContext: IApplicationContext) {
    const UserRepo = repositoryFactory.getUserRepo();

    const userDetail = await UserRepo.getUserData(userId, appContext);
    const result = {
      data: userDetail.bookings,
    };
    return result;
  }

  public async postBooking(
    params: any, userId: String, draftBookingId: String, appContext: IApplicationContext) {

  }
}

export { MockBookingRepo as default };
