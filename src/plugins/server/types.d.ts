import type { Model, ModelStatic } from 'sequelize';
import type {
  IAddDatabaseResult,
  IEditDatabaseResult,
  IDeleteDatabaseResult,
} from '@plugins/auth/helpers/types';
import type { IDBHandlerModelOptions } from '@plugins/server/generators';
import { IRouter } from 'express';

export interface Routes {
  get: string[];
  post: string[];
  put: string[];
  patch: string[];
  delete: string[];
}

export interface IDBRouteConfig {
  path: string;
  model?: ModelStatic<Model>;
  modelName?: string;
  additionalRouteHandler?: (router: IRouter, model: ModelStatic<Model>) => void;
  options?: IDBHandlerModelOptions;
  routes?: IDBRouteConfig[];
}

export interface ISuccessResponse<T = unknown> {
  status: number;
  data: T;
}

export interface IErrorResponse {
  status: number;
  errorname: string;
  message: string;
  data?: unknown;
}

export interface IAddDatabaseResponse<T, U> {
  recordsAdded: IAddDatabaseResult<T, U>[];
  totalRecordsAdded: number;
  recordsNotAdded: IAddDatabaseResult<T, U>[];
  totalRecordsNotAdded: number;
}

export interface IEditDatabaseResponse {
  recordsUpdated: IEditDatabaseResult[];
  totalRecordsUpdated: number;
  recordsNotUpdated: IEditDatabaseResult[];
  totalRecordsNotUpdated: number;
}

export interface IDeleteDatabaseResponse {
  recordsDeleted: IDeleteDatabaseResult[];
  totalRecordsDeleted: number;
  recordsNotDeleted: IDeleteDatabaseResult[];
  totalRecordsNotDeleted: number;
}
