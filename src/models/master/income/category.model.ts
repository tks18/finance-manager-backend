import { Model, DataTypes } from 'sequelize';
import { IncomeMaster } from './master.model';
import { IncomeSourceMaster } from './sources.model';
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
 * @class Income Category Master Table
 */
export class IncomeCategoryMaster extends Model<
  InferAttributes<IncomeCategoryMaster, { omit: 'incomes' }>,
  InferCreationAttributes<IncomeCategoryMaster, { omit: 'incomes' }>
> {
  declare _id: CreationOptional<number>;
  declare category: string;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  // Incomes
  declare getIncomes: HasManyGetAssociationsMixin<IncomeMaster>;
  declare addIncome: HasManyAddAssociationMixin<IncomeMaster, number>;
  declare addIncomes: HasManyAddAssociationsMixin<IncomeMaster, number>;
  declare setIncomes: HasManySetAssociationsMixin<IncomeMaster, number>;
  declare removeIncome: HasManyRemoveAssociationMixin<IncomeMaster, number>;
  declare removeIncomes: HasManyRemoveAssociationsMixin<IncomeMaster, number>;
  declare hasIncome: HasManyHasAssociationMixin<IncomeMaster, number>;
  declare hasIncomes: HasManyHasAssociationsMixin<IncomeMaster, number>;
  declare countIncomes: HasManyCountAssociationsMixin;
  declare createIncome: HasManyCreateAssociationMixin<
    IncomeMaster,
    'category_id'
  >;

  // Income Sources
  declare getIncomeSources: HasManyGetAssociationsMixin<IncomeSourceMaster>;
  declare addIncomeSources: HasManyAddAssociationMixin<
    IncomeSourceMaster,
    number
  >;
  declare addIncomesSources: HasManyAddAssociationsMixin<
    IncomeSourceMaster,
    number
  >;
  declare setIncomesSources: HasManySetAssociationsMixin<
    IncomeSourceMaster,
    number
  >;
  declare removeIncomeSources: HasManyRemoveAssociationMixin<
    IncomeSourceMaster,
    number
  >;
  declare removeIncomesSources: HasManyRemoveAssociationsMixin<
    IncomeSourceMaster,
    number
  >;
  declare hasIncomeSources: HasManyHasAssociationMixin<
    IncomeSourceMaster,
    number
  >;
  declare hasIncomesSources: HasManyHasAssociationsMixin<
    IncomeSourceMaster,
    number
  >;
  declare countIncomesSources: HasManyCountAssociationsMixin;
  declare createIncomeSource: HasManyCreateAssociationMixin<
    IncomeSourceMaster,
    'category_id'
  >;

  declare incomes?: NonAttribute<IncomeMaster[]>;
  declare incomeSources?: NonAttribute<IncomeSourceMaster[]>;

  declare static associations: {
    incomes: Association<IncomeCategoryMaster, IncomeMaster>;
    incomeSources: Association<IncomeCategoryMaster, IncomeSourceMaster>;
  };
}

/**
 * Initializes Income Category Master Table in the Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initIncomeCategoryMaster(sequelize: Sequelize) {
  IncomeCategoryMaster.init(
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
      tableName: 'MasterIncomeCategories',
    },
  );
}
