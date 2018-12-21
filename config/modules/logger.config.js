/**
 * logger config
 * In development logs should be generated in file or console as per required
 * But in other env, it should be only in console (Cloud Watch will pick logs written on console)
 */
export default {
  rotate_file: {
    filename: 'app-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '5m',
    json: true,
    dirname: 'logs/',
    silent: process.env.NODE_ENV !== 'production' ? false : true,
  },
  console: {
    level: 'info',
    handleExceptions: true,
    json: false,
    silent: false,
  },
  levels: {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5
  },
};
