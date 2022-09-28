import { Model, DataTypes } from 'sequelize';
import { ExpenseCategoryMaster } from './category.model';
import type {
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
  NonAttribute,
} from 'sequelize';

/**
 * @class Expense Master Table
 */
export class ExpenseMaster extends Model<
  InferAttributes<ExpenseMaster>,
  InferCreationAttributes<ExpenseMaster>
> {
  declare _id: CreationOptional<number>;
  declare name: string;
  declare type: string;
  declare category_id: ForeignKey<ExpenseCategoryMaster['_id']>;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare expenseCategory?: NonAttribute<ExpenseCategoryMaster>;
}

/**
 * Defines the Relationships for the Model
 */
function defineRelationships(): void {
  ExpenseCategoryMaster.hasMany(ExpenseMaster, {
    sourceKey: '_id',
    foreignKey: 'category_id',
    as: 'expenses',
  });
  ExpenseMaster.belongsTo(ExpenseCategoryMaster, {
    targetKey: '_id',
    foreignKey: 'category_id',
    as: 'expenseCategory',
  });
}

/**
 * Initializes Expense Master Table in the Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initExpenseMaster(sequelize: Sequelize) {
  ExpenseMaster.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: ExpenseCategoryMaster,
          key: '_id',
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'MasterExpenses',
    },
  );

  defineRelationships();
}
