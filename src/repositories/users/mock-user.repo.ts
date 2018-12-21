import IRepo from '../i-repo';
import BaseRepo from '../abstract-repo';
import IUserRepo from './i-user.repo';
import { UserSampleData } from '../../../sampleData/user';
import { IApplicationContext } from '../../utility/helper';

class MockUserRepo extends BaseRepo implements IUserRepo, IRepo {

  public async getUserData(userId: String, appContext: IApplicationContext) {
    const userDetail = UserSampleData.data.filter((user) => {
      if (user.id === userId) {
        return user;
      }
      return null;
    });
    if (userDetail) {
      return userDetail[0];
    }
    return null;
  }
}

export { MockUserRepo as default };
