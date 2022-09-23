import path from 'path';
import winston from 'winston';

interface ILogMessage {
  timestamp?: string;
  label?: string;
  level: string;
  message: string;
}

const logFormat = winston.format.printf(
  (options: ILogMessage) =>
    `${String(options.timestamp)} [${String(options.label)}]:[DB LOG] ${
      options.level
    }: ${options.message}`,
);

export const dblog = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: winston.format.combine(
    winston.format.label({
      label: `express-server:${String(process.env.NODE_ENV)}`,
    }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat,
  ),
  transports: [
    new winston.transports.File({
      level: 'debug',
      filename:
        process.env.NODE_ENV === 'production'
          ? path.resolve(__dirname, 'logs', 'db.log')
          : path.resolve(__dirname, '../../../logs/db.log'),
    }),
  ],
});
