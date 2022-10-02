import type { Model, ModelStatic } from 'sequelize';
import type {
  IAddDatabaseResult,
  IEditDatabaseResult,
  IDeleteDatabaseResult,
} from '@plugins/auth/helpers/types';
import type { IDBHandlerModelOptions } from '@plugins/server/generators';

export interface Routes {
  get: string[];
  post: string[];
  put: string[];
  patch: string[];
  delete: string[];
}

interface IDBRouteConfig {
  path: string;
  model?: ModelStatic<Model>;
  modelName?: string;
  routes?: IDBRouteConfig[];
  options?: IDBHandlerModelOptions;
}

export interface ISuccessResponse {
  status: number;
  data: unknown;
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
