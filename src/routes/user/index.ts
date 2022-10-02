// Initialization
import express, { RequestHandler } from 'express';
import { Users } from '@models';
import { signJwt, verifyJwt } from '@plugins/jwt';

// Response Handlers
import { errorResponseHandler } from '@plugins/server/responses';
import { BadRequest, NotFound, UnAuthorized } from '@plugins/errors';
import { okResponse } from '@plugins/server/responses';

// Router
const router = express.Router();

router.post('/register', (async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name && email && password) {
      const newUser = await Users.create({
        name,
        email,
        password,
      });
      await newUser.hashPasswordnSave();
      const loginToken = signJwt(newUser);
      okResponse(res, {
        email: newUser.email,
        token: loginToken,
      });
    } else {
      throw new BadRequest('name, email, password', 'request.body');
    }
  } catch (e) {
    errorResponseHandler(res, e);
  }
}) as RequestHandler);

router.post('/login', (async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const userDoc = await Users.findOne({
        where: {
          email,
        },
      });
      if (userDoc) {
        const authenticated = await userDoc.authenticate(String(password));
        if (authenticated) {
          const loginToken = signJwt(userDoc);
          okResponse(res, {
            email: userDoc.email,
            token: loginToken,
          });
        } else {
          throw new UnAuthorized('Password Not Matching, Kindly Try Again !');
        }
      } else {
        throw new NotFound(`${String(email)} not found in the Database`);
      }
    } else {
      throw new BadRequest('email, password', 'request.body');
    }
  } catch (e) {
    errorResponseHandler(res, e);
  }
}) as RequestHandler);

router.post('/verify', (req, res) => {
  try {
    const { token } = req.body;
    if (token) {
      const authenticated = verifyJwt(String(token));
      okResponse(res, {
        authenticated,
      });
    } else {
      throw new BadRequest('token', 'request.body');
    }
  } catch (e) {
    errorResponseHandler(res, e);
  }
});

export default router;
