// Types
import type { Request, Response, NextFunction } from 'express';

/**
 * Checks for the Origin Header and assigns the Cors Header if it is Validated
 * @param {Request} req - Express Request Object
 * @param {Response} res - Express Response Object
 * @param {NextFunction} next - Express Next Function
 */
export function cors(req: Request, res: Response, next: NextFunction): void {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'x-session-token, content-type, Accept',
  );
  next();
}
