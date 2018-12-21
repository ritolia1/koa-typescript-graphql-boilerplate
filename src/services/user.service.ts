import { RepositoryFactory } from '../repositories';
import { IApplicationContext, formatPaginationOutput } from '../utility/helper';

const UserRepo = RepositoryFactory.getUserRepo();

export const UserService = {
  async getUserData(appContext: IApplicationContext, queryParams: any, options?: any) {
    const userData = await UserRepo.getUserData(queryParams.userId, appContext);
    if (userData) {
      if (options) {
        return formatPaginationOutput(userData, options.limit, options.offset);
      }
      return userData;
    }
    return null;
  },
};
