/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { errorResponseHandler, okResponse } from '@plugins/server/responses';

import { handleFilter } from '@plugins/server/generators/database-handler/helpers';

// Types
import type { Request, Response } from 'express';
import type { Model, ModelStatic, WhereOptions } from 'sequelize';
import { MakeNullishOptional } from 'sequelize/types/utils';
import { BadRequest } from '@plugins/errors';

interface IFindOptions {
  filter: WhereOptions;
}

/**
 * Common Express Handler for all models to Edit Docs from the Database of that model
 *
 * @param {Request} req - Express Request Object
 * @param {Response} res - Express Response Object
 * @param {string} model - Sequelize Model Object
 * @param {string} modelName - Name of the Model
 */
export async function editDatainDatabase<T extends Model>(
  req: Request,
  res: Response,
  model: ModelStatic<T>,
  modelName: string,
) {
  try {
    const docToUpdate: Partial<MakeNullishOptional<T>>[] =
      req.body['docToUpdate'];
    if (docToUpdate) {
      const options: IFindOptions = req.body['options'];
      const updateResult = await model.update(docToUpdate, {
        where: handleFilter(options.filter),
      });
      okResponse(res, { updatedRecords: updateResult });
    } else {
      throw new BadRequest(
        `docToUpdate and to be of type ${modelName}[]`,
        'Request.Body',
      );
    }
  } catch (e) {
    errorResponseHandler(res, e);
  }
}
