import { InternalServerError } from '@plugins/errors';
import jwt from 'jsonwebtoken';

/**
 * Verifies the JWT Sent by the User
 * @param {string} jwtString - User JWT String
 * @returns {boolean} - boolean
 */
export function verifyJwt(jwtString: string): boolean {
  const { SIGNSECRET } = process.env;
  if (SIGNSECRET) {
    const userObj = jwt.verify(jwtString, SIGNSECRET);
    if (userObj && typeof userObj !== 'string') {
      return true;
    }
    return false;
  } else {
    throw new InternalServerError(
      'Signsecret ENV Not Found, Required for Verifying JWT',
    );
  }
}
