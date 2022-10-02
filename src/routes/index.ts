// Initialization
import express, { Request, Response } from 'express';
import { verifyToken } from '@plugins/server/middlewares';

// Routes
import userPath from './user';
import setupPath from './setup';
import dataPath from './data';

// HTTP Error Middlewares
import { NotFound } from '@plugins/errors';

// Response Handlers
import { errorResponseHandler } from '@plugins/server/responses';

// Others
import path from 'path';
import { EndpointGenerator } from '@plugins/server/generators';

// Router
const router = express.Router();

const { NODE_ENV } = process.env;

router.use('/user', userPath);
router.use('/setup', verifyToken, setupPath);
router.use('/data', verifyToken, dataPath);

// Respond with all the Endpoints
router.post('/endpoints', (req: Request, res: Response) =>
  new EndpointGenerator(res, router).serve(),
);

// Serve 404 when path (POST) is not found
router.post(/(\/.*)+/, (req, res): void => {
  errorResponseHandler(res, new NotFound('404: Path not found'));
});

// Serve 404 when path (PATCH) is not found
router.patch(/(\/.*)+/, (req, res): void => {
  errorResponseHandler(res, new NotFound('404: Path not found'));
});

// Serve 404 when path (DELETE) is not found
router.delete(/(\/.*)+/, (req, res): void => {
  errorResponseHandler(res, new NotFound('404: Path not found'));
});

// Serve HTML Files
router.get(/(\/.*)+/, (req, res): void => {
  const viewsPath =
    NODE_ENV === 'production'
      ? path.resolve(__dirname, 'views', 'index.html')
      : path.resolve(__dirname, '../views/index.html');
  res.status(200).sendFile(viewsPath);
});

export default router;
