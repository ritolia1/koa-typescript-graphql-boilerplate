import { RepositoryFactory } from '../repositories';
import { IApplicationContext, formatPaginationOutput } from '../utility/helper';

const hotelRepo = RepositoryFactory.getHotelRepo();

export const HotelService = {
  async getAllHotelsDetails(appContext: IApplicationContext, queryParams: any, options?: any) {
    const hotelsDetails = await hotelRepo.getHotelsDetails(appContext);
    if (hotelsDetails && hotelsDetails.data) {
      if (options) {
        return formatPaginationOutput(hotelsDetails.data, options.limit, options.offset);
      }
      return hotelsDetails;
    }
    return null;
  },
};
