import { InternalServerError } from '@plugins/errors';
import jwt from 'jsonwebtoken';
import { Users } from '@models';

/**
 * Create a JWT for the Particular User to login
 *
 * @param {Users} user - User Object
 * @returns {string} - Signed JWT
 */
export function signJwt(user: Users): string {
  const { SIGNSECRET } = process.env;
  if (SIGNSECRET) {
    const payload = {
      id: user._id,
    };
    const signedObj = jwt.sign(payload, SIGNSECRET, {
      expiresIn: '60d',
    });
    return signedObj;
  } else {
    throw new InternalServerError(
      'Signsecret ENV Not Found, Required for Signing JWT',
    );
  }
}
