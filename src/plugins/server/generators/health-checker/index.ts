import { createTerminus, TerminusOptions } from '@godaddy/terminus';
import { logger } from '@plugins';

// Types
import type { Server } from 'http';

/**
 * Creates a Express Health Check Service
 */
export class ExpressHealthChecker {
  private server: Server;

  /**
   * Creates a Express Health Check Service
   *
   * @param {Server} server - Http Server Object
   */
  constructor(server: Server) {
    this.server = server;
  }

  /**
   * Close Database Connection Before Termination of Server
   *
   * @returns {[Promise<void>]} Promise - Closes the Database Connection
   */
  private onSignal(): Promise<void> {
    logger.info('server is starting cleanup');
    return new Promise<void>((resolve) => resolve());
  }

  /**
   * Server Shutdown Message
   *
   * @returns {Promise<void>} Promise - Console logging Shutdown Message
   */
  private onShutdown(): Promise<void> {
    return new Promise<void>((resolve) => {
      logger.info('cleanup finished, server is shutting down');
      resolve();
    });
  }

  /**
   * Starts the Health Checker Service
   */
  public start(): void {
    const options: TerminusOptions = {
      onSignal: () => this.onSignal(),
      onShutdown: () => this.onShutdown(),
    };
    createTerminus(this.server, options);
  }
}
