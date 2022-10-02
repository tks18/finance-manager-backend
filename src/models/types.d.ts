import { InferAttributes, Model, Optional } from 'sequelize';

export type TModelAttributes<T extends Model> = Optional<
  InferAttributes<T, { omit: '_id' }>,
  'createdAt' | 'updatedAt'
>;
