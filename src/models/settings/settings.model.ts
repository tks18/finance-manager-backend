import { Model, DataTypes } from 'sequelize';
import type {
  Sequelize,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

/**
 * @class Settings Table
 */
export class Settings extends Model<
  InferAttributes<Settings>,
  InferCreationAttributes<Settings>
> {
  declare _id: CreationOptional<number>;
  declare name: string;
  declare type: string;
  declare value: string;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

/**
 * Initializes Settings Table in the Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initSettings(sequelize: Sequelize) {
  Settings.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: { unique: true, allowNull: false, type: DataTypes.STRING },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      value: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, timestamps: true, tableName: 'ApplicationSettings' },
  );
}
