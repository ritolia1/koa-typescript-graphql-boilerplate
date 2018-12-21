import IRepo from '../i-repo';
import BaseRepo from '../abstract-repo';
import IPaymentRepo from './i-hotel.repo';
import { hotelsSampleData } from '../../../sampleData/hotels';
import { IApplicationContext } from '../../utility/helper';

class MockHotelRepo extends BaseRepo implements IPaymentRepo, IRepo {

  public async getHotelsDetails(appContext: IApplicationContext) {
    return hotelsSampleData;
  }
}

export { MockHotelRepo as default };
