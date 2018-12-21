import IRepo from '../i-repo';
import BaseRepo from '../abstract-repo';
import IPaymentRepo from './i-hotel.repo';
import { IApplicationContext } from '../../utility/helper';

class HotelRepo extends BaseRepo implements IPaymentRepo, IRepo {

  public async getHotelsDetails(appContext: IApplicationContext) {
    // actual implementation will happen here
  }
}

export { HotelRepo as default };
