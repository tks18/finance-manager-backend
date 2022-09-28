import { Model, DataTypes } from 'sequelize';
import { InvestmentCategoryMaster } from './category.model';
import type {
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
  NonAttribute,
} from 'sequelize';

/**
 * @class Investment Master Table
 */
export class InvestmentMaster extends Model<
  InferAttributes<InvestmentMaster>,
  InferCreationAttributes<InvestmentMaster>
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
 *
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
      name: DataTypes.STRING,
      short_name: DataTypes.STRING,
      yahoo_ticker: DataTypes.STRING,
      investment_sector: DataTypes.STRING,
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
