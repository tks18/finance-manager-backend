import { InferAttributes, Model, Optional } from 'sequelize';

export type TModelAttributes<T extends Model> = Omit<
  Optional<InferAttributes<T>, 'createdAt' | 'updatedAt'>,
  '_id'
>;
