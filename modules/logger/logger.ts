import winston from 'winston';
import winstonDailyRotateFile from 'winston-daily-rotate-file';
import { loggerConfig } from '../../config';
const MESSAGE = Symbol.for('message');

const jsonFormatter = (logEntry: any) => {
  const base = { timestamp: new Date() };
  const json = Object.assign(base, logEntry);
  logEntry[MESSAGE] = JSON.stringify(json);
  return logEntry;
};

const logger = winston.createLogger({
  levels: loggerConfig.levels,
  transports: [
    new winstonDailyRotateFile(loggerConfig.rotate_file),
  ],
  level: 'debug',
  exitOnError: false,
  format: winston.format(jsonFormatter)(),
});

logger.add(new winston.transports.Console(loggerConfig.console));

export default logger;
