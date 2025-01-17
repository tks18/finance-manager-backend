// Core
import http from 'http';
import path from 'path';
import express from 'express';
import fs from 'fs';
import os from 'os';
import { DateTime } from 'luxon';
import { logger } from '@plugins/logger';

// Database Plugin
import { sequelize, authenticateDB } from '@plugins/db';
import { initAllModels } from '@models';

// Exress Middlewares
import bodyparser from 'body-parser';
import morgan from 'morgan';

// Health Checker Service
import { ExpressHealthChecker } from '@plugins/server/generators';

// Router
import router from '@routes';

// Types
import type { Express } from 'express';
import type { Sequelize } from 'sequelize';

/**
 * @class ExpressServer
 */
export class ExpressServer {
  public app: Express;
  public server: http.Server;
  public db: undefined | Sequelize;
  private port: string | number;

  /**
   * Initializes and Starts the Zyndex Server
   * @param {number} port - Port Number to start the server
   */
  constructor(port: number | string) {
    this.port = port;
    this.app = express();
    this.initializeMiddlewares();
    this.setCorsHeaders();
    this.serveStaticFiles();
    this.assignRouter();
    this.server = this.createHttpServer(this.app);
    this.startHealthChecker();
  }

  /**
   * Prepare Morgon Request Logger Middleware
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
      () => `express-server:${String(process.env.NODE_ENV)}`,
    );
    morgan.format(
      'expresslog',
      ':date [:appMode]:[REQUEST LOG] :method :url :status - :response-time ms',
    );
  }

  /**
   * Initialize Server Middlewares
   */
  private initializeMiddlewares(): void {
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: true }));
    this.prepareLoggerMiddleware();
    this.app.use(morgan('expresslog'));
    this.app.use(
      morgan('expresslog', {
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
   * Sets the CORS Headers
   */
  private setCorsHeaders(): void {
    this.app.use((req, res, next) => {
      res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none');
      res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      next();
    });
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
        authenticateDB(sequelize)
          .then(() => initAllModels(sequelize))
          .then(() => sequelize.sync())
          .then(() =>
            logger.info(
              `Succesfully Connected & Authenticated to Postgres ${String(
                sequelize.config.database,
              )} Database using Sequelize at ${String(
                sequelize.config.host,
              )}:${String(sequelize.config.port)}`,
            ),
          )
          .catch((e) => {
            logger.error(e);
            this.server.close();
          });
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
