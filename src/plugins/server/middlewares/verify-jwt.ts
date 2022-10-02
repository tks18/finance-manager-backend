import { verifyJwt } from '@plugins/jwt';
import { UnAuthorized } from '@plugins/errors';
import { errorResponseHandler } from '@plugins/server/responses';

// Types
import type { Request, Response, NextFunction } from 'express';

/**
 * Verifies whether the jwt token is authorized
 *
 * @param {Request} req - Express Request Object
 * @param {Response} res - Express Response Object
 * @param {NextFunction} next - Express Next Function
 */
export function verifyToken(req: Request, res: Response, next: NextFunction) {
  try {
    const { 'x-session-token': sessionToken } = req.headers;
    if (sessionToken && typeof sessionToken === 'string') {
      if (verifyJwt(sessionToken)) {
        next();
      } else {
        throw new UnAuthorized('Session Token not valid, Kindly Relogin Again');
      }
    } else {
      throw new UnAuthorized('Session Token not found in the Request headers');
    }
  } catch (e) {
    errorResponseHandler(res, e);
  }
}
