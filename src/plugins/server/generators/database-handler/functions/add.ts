import { BadRequest } from '@plugins/errors';
import {
  createdResponse,
  errorResponseHandler,
} from '@plugins/server/responses';

// Types
import type { Request, Response } from 'express';
import type { Model, ModelStatic } from 'sequelize';
import type { MakeNullishOptional } from 'sequelize/types/utils';

/**
 * Common Express Handler for all models to Add new Docs to the Database of that model
 *
 * @param {Request} req - Express Request Object
 * @param {Response} res - Express Response Object
 * @param {string} model - Sequelize Model Object
 * @param {string} modelName - Name of the Model
 */
export async function addDatatoDatabase<T extends Model>(
  req: Request,
  res: Response,
  model: ModelStatic<T>,
  modelName: string,
) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const docsToAdd: MakeNullishOptional<T>[] = req.body['docsToAdd'];
    if (docsToAdd) {
      const createdDocs = await model.bulkCreate(docsToAdd, {
        validate: true,
      });
      createdResponse(res, {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        docs: createdDocs.map((doc) => doc.toJSON()),
      });
    } else {
      throw new BadRequest(
        `docsToAdd and to be of type ${modelName}[]`,
        'Request.Body',
      );
    }
  } catch (e) {
    errorResponseHandler(res, e);
  }
}
