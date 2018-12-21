// Loads the contents of .env file in the project root to App Environment
require('dotenv').config();

/**
 * Default Application config
 */
const appConfig = {
  isMockMode: (process.env.MOCK_MODE && process.env.MOCK_MODE === 'true'),
};

export default appConfig;
