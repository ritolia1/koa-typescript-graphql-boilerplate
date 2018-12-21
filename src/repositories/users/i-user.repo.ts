import { IApplicationContext } from '../../utility/helper';

interface IUserRepo {
  getUserData(userId: String, appContext: IApplicationContext): any;
}

export { IUserRepo as default };
