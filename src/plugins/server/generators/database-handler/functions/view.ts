/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { errorResponseHandler, okResponse } from '@plugins/server/responses';
import { modelIncludeMap } from '@models/model-map';
import {
  handleFilter,
  handleInclude,
  handleOrder,
} from '@plugins/server/generators/database-handler/helpers';

// Types
import type { Request, Response } from 'express';
import type {
  Model,
  ModelStatic,
  FindAttributeOptions,
  WhereOptions,
} from 'sequelize';

interface IIncludeOptions {
  model: string;
  attributes?: FindAttributeOptions;
  filter?: WhereOptions;
  include?: IIncludeOptions[] | string[];
}

interface IFindOptions {
  attributes: FindAttributeOptions;
  filter: WhereOptions;
  include: IIncludeOptions[] | string[];
  order: string[][];
  limit: number;
  offset: number;
}

/**
 * Common Express Handler for all models to View Docs from the Database of that model
 *
 * @param {Request} req - Express Request Object
 * @param {Response} res - Express Response Object
 * @param {string} model - Sequelize Model Object
 */
export async function viewDatafromDatabase<T extends Model>(
  req: Request,
  res: Response,
  model: ModelStatic<T>,
) {
  try {
    const options: IFindOptions = req.body['options'];
    const includeMap = modelIncludeMap();
    const docs = await model.findAll(
      options
        ? {
            order: handleOrder(options.order, includeMap),
            where: handleFilter(options.filter),
            attributes: options.attributes && options.attributes,
            include: handleInclude(options.include, includeMap),
            limit: options.limit && options.limit,
            offset: options.offset && options.offset,
          }
        : {},
    );
    okResponse(res, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      docs: docs.map((doc) => doc.toJSON()),
    });
  } catch (e) {
    errorResponseHandler(res, e);
  }
}
