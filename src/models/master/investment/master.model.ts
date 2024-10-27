import { Model, DataTypes } from 'sequelize';
import {
  InvestmentCategoryMaster,
  Incomes,
  Investments,
  MarketData,
} from '@models';
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
 * @class Investment Master Table
 */
export class InvestmentMaster extends Model<
  InferAttributes<
    InvestmentMaster,
    { omit: 'incomes' | 'transactions' | 'marketRecords' }
  >,
  InferCreationAttributes<
    InvestmentMaster,
    { omit: 'incomes' | 'transactions' | 'marketRecords' }
  >
> {
  declare _id: CreationOptional<number>;
  declare name: string;
  declare short_name: string;
  declare yahoo_ticker: string;
  declare investment_sector: string;
  declare category_id: ForeignKey<InvestmentCategoryMaster['_id']>;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare investmentCategory?: NonAttribute<InvestmentCategoryMaster>;

  declare getIncomes: HasManyGetAssociationsMixin<Incomes>;
  declare addIncome: HasManyAddAssociationMixin<Incomes, number>;
  declare addIncomes: HasManyAddAssociationsMixin<Incomes, number>;
  declare setIncomes: HasManySetAssociationsMixin<Incomes, number>;
  declare removeIncome: HasManyRemoveAssociationMixin<Incomes, number>;
  declare removeIncomes: HasManyRemoveAssociationsMixin<Incomes, number>;
  declare hasIncome: HasManyHasAssociationMixin<Incomes, number>;
  declare hasIncomes: HasManyHasAssociationsMixin<Incomes, number>;
  declare countIncomes: HasManyCountAssociationsMixin;
  declare createIncome: HasManyCreateAssociationMixin<Incomes, 'investment_id'>;

  declare incomes?: NonAttribute<Incomes[]>;

  declare getTransactions: HasManyGetAssociationsMixin<Investments>;
  declare addTransaction: HasManyAddAssociationMixin<Investments, number>;
  declare addTransactions: HasManyAddAssociationsMixin<Investments, number>;
  declare setTransactions: HasManySetAssociationsMixin<Investments, number>;
  declare removeTransaction: HasManyRemoveAssociationMixin<Investments, number>;
  declare removeTransactions: HasManyRemoveAssociationsMixin<
    Investments,
    number
  >;
  declare hasTransaction: HasManyHasAssociationMixin<Investments, number>;
  declare hasTransactions: HasManyHasAssociationsMixin<Investments, number>;
  declare countTransactions: HasManyCountAssociationsMixin;
  declare createTransaction: HasManyCreateAssociationMixin<
    Investments,
    'master_id'
  >;

  declare transactions?: NonAttribute<Investments[]>;

  // Market Data
  declare getMarketRecords: HasManyGetAssociationsMixin<MarketData>;
  declare addMarketRecord: HasManyAddAssociationMixin<MarketData, number>;
  declare addMarketRecords: HasManyAddAssociationsMixin<MarketData, number>;
  declare setMarketRecords: HasManySetAssociationsMixin<MarketData, number>;
  declare removeMarketRecord: HasManyRemoveAssociationMixin<MarketData, number>;
  declare removeMarketRecords: HasManyRemoveAssociationsMixin<
    MarketData,
    number
  >;
  declare hasMarketRecord: HasManyHasAssociationMixin<MarketData, number>;
  declare hasMarketRecords: HasManyHasAssociationsMixin<MarketData, number>;
  declare countMarketRecords: HasManyCountAssociationsMixin;
  declare createMarketRecord: HasManyCreateAssociationMixin<
    MarketData,
    'master_id'
  >;

  declare marketRecords?: NonAttribute<MarketData[]>;

  declare static associations: {
    incomes: Association<InvestmentMaster, Incomes>;
    transactions: Association<InvestmentMaster, Investments>;
    marketRecords: Association<InvestmentMaster, MarketData>;
  };
}

/**
 * Defines the Relationships for the Model
 */
function defineRelationships(): void {
  InvestmentCategoryMaster.hasMany(InvestmentMaster, {
    sourceKey: '_id',
    foreignKey: 'category_id',
    as: 'investments',
  });
  InvestmentMaster.belongsTo(InvestmentCategoryMaster, {
    targetKey: '_id',
    foreignKey: 'category_id',
    as: 'investmentCategory',
  });
}

/**
 * Initializes Investment Master Table in Database for Syncing
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initInvestmentMaster(sequelize: Sequelize): void {
  InvestmentMaster.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: { allowNull: false, type: DataTypes.STRING },
      short_name: { allowNull: false, type: DataTypes.STRING },
      yahoo_ticker: { allowNull: false, type: DataTypes.STRING },
      investment_sector: { allowNull: false, type: DataTypes.STRING },
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: InvestmentCategoryMaster,
          key: '_id',
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, timestamps: true, tableName: 'MasterInvestments' },
  );

  defineRelationships();
}
