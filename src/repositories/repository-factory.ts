/**
 * Constructs the repository to talk to external services
 *  or gets a mock version of it based on the config
 */
import config from '../../config';
import { getLoggerInstance } from '../../modules/logger';
import IUserRepo from './users/i-user.repo';
import IHotelRepo from './hotels/i-hotel.repo';
import { TYPES } from '../constants';
import HotelRepo from './hotels/hotel.repo';
import MockPaymentRepo from './hotels/mock-hotel.repo';
import MockUserRepo from './users/mock-user.repo';
import MockBookingRepo from './bookings/mock-booking.repo';
import IBookingRepo from './bookings/i-booking.repo';

const MODULE_NAME = 'Repository';

/**
 * Constructs a new logger instance with the repository module name and dynamic repoName
 * @param repoName
 */
const getNewLoggerInstance = (repoName: string) => {

  const loggerRepoName = config.isMockMode ? `MOCK-${repoName}` : repoName;
  return getLoggerInstance(loggerRepoName, MODULE_NAME);
};

/**
 * Factory method for constructing the Hotels Repository
 * @param args
 */
const getHotelRepo = (args?: any): IHotelRepo => {

  const logger = getNewLoggerInstance(TYPES.HOTEL);
  if (!config.isMockMode) {
    return new HotelRepo(args, logger);
  }
  return new MockPaymentRepo(args, logger);
};

/**
 * Factory method for constructing the User Repository
 * 
 * @param args 
 */
const getUserRepo = (args?: any): IUserRepo => {

  const logger = getNewLoggerInstance(TYPES.HOTEL);
  return new MockUserRepo(args, logger);
};

/**
 * Factory method for constructing the Bookings Repository
 * 
 * @param args 
 */
const getBookingRepo = (args?: any): IBookingRepo => {

  const logger = getNewLoggerInstance(TYPES.HOTEL);
  return new MockBookingRepo(args, logger);
};

export default {
  getHotelRepo,
  getUserRepo,
  getBookingRepo,
};
