// Initialization
import express from 'express';

// Config Handler
import { hostConfigRoutes } from '@plugins/server/helpers';

// Routes Config
import { routesConfig } from './routes.config';

// Router
const router = express.Router();

const configRouter = hostConfigRoutes(routesConfig);

router.use('/', configRouter);

export default router;
