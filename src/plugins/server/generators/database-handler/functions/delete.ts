/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { errorResponseHandler, okResponse } from '@plugins/server/responses';

import { handleFilter } from '@plugins/server/generators/database-handler/helpers';

// Types
import type { Request, Response } from 'express';
import type { Model, ModelStatic, WhereOptions } from 'sequelize';

interface IFindOptions {
  filter: WhereOptions;
}

/**
 * Common Express Handler for all models to Delete Docs from the Database of that model
 * @param {Request} req - Express Request Object
 * @param {Response} res - Express Response Object
 * @param {string} model - Sequelize Model Object
 */
export async function deleteDatafromDatabase<T extends Model>(
  req: Request,
  res: Response,
  model: ModelStatic<T>,
) {
  try {
    const options: IFindOptions = req.body['options'];
    const deleteResult = await model.destroy({
      where: handleFilter(options.filter),
    });
    okResponse(res, { deletedRecords: deleteResult });
  } catch (e) {
    errorResponseHandler(res, e);
  }
}
