import { Model, DataTypes } from 'sequelize';
import { IncomeCategoryMaster } from './category.model';
import type {
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
  NonAttribute,
} from 'sequelize';

/**
 * @class Income Master Table
 */
export class IncomeMaster extends Model<
  InferAttributes<IncomeMaster>,
  InferCreationAttributes<IncomeMaster>
> {
  declare _id: CreationOptional<number>;
  declare name: string;
  declare type: string;
  declare is_pf: boolean;
  declare is_tds: boolean;
  declare is_mediclaim: boolean;
  declare category_id: ForeignKey<IncomeCategoryMaster['_id']>;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare incomeCategory?: NonAttribute<IncomeCategoryMaster>;
}

/**
 * Defines the Relationships for the Model
 */
function defineRelationships(): void {
  IncomeCategoryMaster.hasMany(IncomeMaster, {
    sourceKey: '_id',
    foreignKey: 'category_id',
    as: 'incomes',
  });
  IncomeMaster.belongsTo(IncomeCategoryMaster, {
    targetKey: '_id',
    foreignKey: 'category_id',
    as: 'incomeCategory',
  });
}

/**
 * Initializes Income Master Table in Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initIncomeMaster(sequelize: Sequelize): void {
  IncomeMaster.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      is_pf: DataTypes.BOOLEAN,
      is_tds: DataTypes.BOOLEAN,
      is_mediclaim: DataTypes.BOOLEAN,
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: IncomeCategoryMaster,
          key: '_id',
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, timestamps: true, tableName: 'MasterIncomes' },
  );

  defineRelationships();
}
