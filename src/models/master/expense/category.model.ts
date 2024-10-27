import { Model, DataTypes } from 'sequelize';
import { ExpenseMaster } from './master.model';
import type {
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Association,
} from 'sequelize';

/**
 * @class Expense Category Master Table
 */
export class ExpenseCategoryMaster extends Model<
  InferAttributes<ExpenseCategoryMaster, { omit: 'expenses' }>,
  InferCreationAttributes<ExpenseCategoryMaster, { omit: 'expenses' }>
> {
  declare _id: CreationOptional<number>;
  declare category: string;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare getExpenses: HasManyGetAssociationsMixin<ExpenseMaster>;
  declare addExpense: HasManyAddAssociationMixin<ExpenseMaster, number>;
  declare addExpenses: HasManyAddAssociationsMixin<ExpenseMaster, number>;
  declare setExpenses: HasManySetAssociationsMixin<ExpenseMaster, number>;
  declare removeExpense: HasManyRemoveAssociationMixin<ExpenseMaster, number>;
  declare removeExpenses: HasManyRemoveAssociationsMixin<ExpenseMaster, number>;
  declare hasExpense: HasManyHasAssociationMixin<ExpenseMaster, number>;
  declare hasExpenses: HasManyHasAssociationsMixin<ExpenseMaster, number>;
  declare countExpenses: HasManyCountAssociationsMixin;
  declare createExpense: HasManyCreateAssociationMixin<
    ExpenseMaster,
    'category_id'
  >;

  declare expenses?: NonAttribute<ExpenseMaster[]>;

  declare static associations: {
    expenses: Association<ExpenseCategoryMaster, ExpenseMaster>;
  };
}

/**
 * Initializes Expense Category Master Table in the Database for Syncing
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initExpenseCategoryMaster(sequelize: Sequelize) {
  ExpenseCategoryMaster.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      category: { allowNull: false, type: DataTypes.STRING },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'MasterExpenseCategories',
    },
  );
}
