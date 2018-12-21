import { IApplicationContext } from '../../utility/helper';

interface IHotelRepo {
  getHotelsDetails(appContext: IApplicationContext): any;
}

export { IHotelRepo as default };
