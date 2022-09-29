import { Model, DataTypes } from 'sequelize';
import { ExpenseCategoryMaster, Expenses } from '@models';
import type {
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
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
 * @class Expense Master Table
 */
export class ExpenseMaster extends Model<
  InferAttributes<ExpenseMaster, { omit: 'transactions' }>,
  InferCreationAttributes<ExpenseMaster, { omit: 'transactions' }>
> {
  declare _id: CreationOptional<number>;
  declare name: string;
  declare type: string;
  declare category_id: ForeignKey<ExpenseCategoryMaster['_id']>;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare expenseCategory?: NonAttribute<ExpenseCategoryMaster>;

  declare getTransactions: HasManyGetAssociationsMixin<Expenses>;
  declare addTransaction: HasManyAddAssociationMixin<Expenses, number>;
  declare addTransactions: HasManyAddAssociationsMixin<Expenses, number>;
  declare setTransactions: HasManySetAssociationsMixin<Expenses, number>;
  declare removeTransaction: HasManyRemoveAssociationMixin<Expenses, number>;
  declare removeTransactions: HasManyRemoveAssociationsMixin<Expenses, number>;
  declare hasTransaction: HasManyHasAssociationMixin<Expenses, number>;
  declare hasTransactions: HasManyHasAssociationsMixin<Expenses, number>;
  declare countTransactions: HasManyCountAssociationsMixin;
  declare createTransaction: HasManyCreateAssociationMixin<
    Expenses,
    'master_id'
  >;

  declare transactions?: NonAttribute<Expenses[]>;

  declare static associations: {
    transactions: Association<ExpenseMaster, Expenses>;
  };
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
