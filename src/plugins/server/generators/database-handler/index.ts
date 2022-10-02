import express from 'express';
import {
  addDatatoDatabase,
  viewDatafromDatabase,
  editDatainDatabase,
  deleteDatafromDatabase,
} from './functions';

// Types
import { IRouter, Request, Response } from 'express';
import { Model, ModelStatic } from 'sequelize';

export interface IDBHandlerModelOptions {
  add: boolean;
  get: boolean;
  edit: boolean;
  delete: boolean;
}

/**
 * @class {ExpressDatabaseHandler} Express Handlers for Performing Database Functions
 */
export class ExpressDatabaseHandler<T extends Model> {
  private model: ModelStatic<T>;
  private modelName: string;
  private modelOptions: IDBHandlerModelOptions;

  /**
   * Express Handlers for Performing Database Functions
   *
   * @param {ModelStatic} model - Sequelize Model Object
   * @param {string} modelName - Name of the Model
   * @param {IDBHandlerModelOptions} modelOptions - Options to Select Routes (default all routes will be hosted)
   */
  constructor(
    model: ModelStatic<T>,
    modelName: string,
    modelOptions: IDBHandlerModelOptions = {
      get: true,
      add: true,
      edit: true,
      delete: true,
    },
  ) {
    this.model = model;
    this.modelName = modelName;
    this.modelOptions = modelOptions;
  }

  /**
   * Common Express Handler for all models to Add new Docs to the Database of that model
   *
   * @param {Request} req - Express Request Object
   * @param {Response} res - Express Response Object
   */
  public async add(req: Request, res: Response) {
    await addDatatoDatabase(req, res, this.model, this.modelName);
  }

  /**
   * Common Express Handler for all models to View Docs from the Database of that model
   *
   * @param {Request} req - Express Request Object
   * @param {Response} res - Express Response Object
   */
  public async view(req: Request, res: Response) {
    await viewDatafromDatabase(req, res, this.model);
  }

  /**
   * Common Express Handler for all models to Edit Docs from the Database of that model
   *
   * @param {Request} req - Express Request Object
   * @param {Response} res - Express Response Object
   */
  public async edit(req: Request, res: Response) {
    await editDatainDatabase(req, res, this.model, this.modelName);
  }

  /**
   * Common Express Handler for all models to Delete Docs from the Database of that model
   *
   * @param {Request} req - Express Request Object
   * @param {Response} res - Express Response Object
   */
  public async delete(req: Request, res: Response) {
    await deleteDatafromDatabase(req, res, this.model);
  }

  /**
   * Hosts all the Routes (Add, View, Edit, Delete) for the Model
   *
   * @returns {IRouter} Router Object Containing all the Routes
   */
  public serveAllRoutes(): IRouter {
    const router = express.Router();
    if (this.modelOptions.add) {
      router.post('/add', (req, res) => {
        void this.add(req, res);
      });
    }

    if (this.modelOptions.get) {
      router.post('/get', (req, res) => {
        void this.view(req, res);
      });
    }

    if (this.modelOptions.edit) {
      router.patch('/edit', (req, res) => {
        void this.edit(req, res);
      });
    }

    if (this.modelOptions.delete) {
      router.delete('/delete', (req, res) => {
        void this.delete(req, res);
      });
    }
    return router;
  }
}
