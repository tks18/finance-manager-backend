import express from 'express';
import { ExpressDatabaseHandler } from '@plugins/server/generators';
import { InternalServerError } from '@plugins/errors';

// Types
import type { IRouter } from 'express';
import type { IDBRouteConfig } from '@plugins/server/types';

/**
 * Parses DB Model Route Config and Hosts all the Routes
 * @param {IDBRouteConfig[]} config - Model Route Config
 * @returns {IRouter} - Router for the Config
 */
export function hostConfigRoutes(config: IDBRouteConfig[]): IRouter {
  const mainRouter = express.Router();
  config.forEach((route) => {
    if (route.routes) {
      mainRouter.use(route.path, hostConfigRoutes(route.routes));
    } else {
      if (route.model && route.modelName) {
        const routeHandler = new ExpressDatabaseHandler(
          route.model,
          route.modelName,
          route.options,
        );
        mainRouter.use(
          route.path,
          routeHandler.serveAllRoutes(route.additionalRouteHandler),
        );
      } else {
        throw new InternalServerError('Routes Config Not Setup Properly');
      }
    }
  });
  return mainRouter;
}
