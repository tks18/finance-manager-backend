// Core
import http from 'http';
import path from 'path';
import express from 'express';
import fs from 'fs';
import os from 'os';
import { DateTime } from 'luxon';

// Exress Middlewares
import bodyparser from 'body-parser';
import helmet from 'helmet';
import xssProtect from 'x-xss-protection';
import morgan from 'morgan';
import { logger } from '@plugins';

// Health Checker Service
import { ExpressHealthChecker } from '@plugins/server/generators';

// Router
import router from '@routes';

// Types
import type { Express } from 'express';

/**
 * @class ExpressServer
 */
export class ExpressServer {
  public app: Express;
  public server: http.Server;
  private port: string | number;

  /**
   * Initializes and Starts the Zyndex Server
   *
   * @param {number} port - Port Number to start the server
   */
  constructor(port: number | string) {
    this.port = port;
    this.app = express();
    this.initializeMiddlewares();
    this.serveStaticFiles();
    this.assignRouter();
    this.server = this.createHttpServer(this.app);
    this.startHealthChecker();
  }

  /**
   *
   */
  private prepareLoggerMiddleware(): void {
    morgan.token('date', () => {
      const dateTime = DateTime.now();
      return DateTime.local(
        dateTime.year,
        dateTime.month,
        dateTime.day,
        dateTime.hour,
        dateTime.minute,
        dateTime.second,
        dateTime.millisecond,
      ).toFormat('yyyy-MM-dd HH:mm:ss');
    });
    morgan.token(
      'appMode',
      () => `zyndex-server:${String(process.env.NODE_ENV)}`,
    );
    morgan.format(
      'zyndexLog',
      ':date [:appMode]:[REQUEST LOG] :method :url :status - :response-time ms',
    );
  }

  /**
   * Initialize Server Middlewares
   */
  private initializeMiddlewares(): void {
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(xssProtect());
    this.app.set('trust proxy', true);
    this.prepareLoggerMiddleware();
    this.app.use(morgan('zyndexLog'));
    this.app.use(
      morgan('zyndexLog', {
        stream: fs.createWriteStream(
          process.env.NODE_ENV === 'development'
            ? path.resolve(__dirname, '../../../logs/requests.log')
            : path.resolve(__dirname, 'logs', 'requests.log'),
          { flags: 'a' },
        ),
      }),
    );
  }

  /**
   * Serve Static Views Folder
   */
  private serveStaticFiles(): void {
    this.app.use(
      express.static(
        process.env.NODE_ENV === 'development'
          ? 'src/views'
          : path.join(__dirname, 'views'),
      ),
    );
  }

  /**
   * Assign the Server's Default Router
   */
  private assignRouter(): void {
    this.app.use('/', router);
  }

  /**
   * Create a Http Server from Express App
   *
   * @param {Express} app - Express App Object
   * @returns {http.Server} server - Http Server
   */
  private createHttpServer(app: Express): http.Server {
    return http.createServer(app);
  }

  /**
   * Start the Health Checker Service
   */
  private startHealthChecker(): void {
    new ExpressHealthChecker(this.server).start();
  }

  /**
   * Start the Zyndex Server
   */
  public start(): void {
    try {
      this.server.listen(this.port, () => {
        logger.info(`Environment: ${os.type()}`);
        logger.info(`Server Started on Port: ${this.port}`);
        logger.info('Connecting to Database.....');
      });
      this.server.once('error', (err) => {
        logger.error(
          'There was an error starting the server in the error listener:',
          err,
        );
        this.server.close();
      });
    } catch (e) {
      logger.error('There was an error starting the server:', e);
      this.server.close();
    }
  }
}
