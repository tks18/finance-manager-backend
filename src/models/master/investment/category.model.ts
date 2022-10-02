import { Model, DataTypes } from 'sequelize';
import { InvestmentMaster } from './master.model';
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
 * @class Investment Category Master Table
 */
export class InvestmentCategoryMaster extends Model<
  InferAttributes<InvestmentCategoryMaster, { omit: 'investments' }>,
  InferCreationAttributes<InvestmentCategoryMaster, { omit: 'investments' }>
> {
  declare _id: CreationOptional<number>;
  declare category: string;
  declare category_short: string;
  declare risk_rank: number;
  declare risk_name: string;
  declare tax_term_threshold_years: number;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare getInvestments: HasManyGetAssociationsMixin<InvestmentMaster>;
  declare addInvestment: HasManyAddAssociationMixin<InvestmentMaster, number>;
  declare addInvestments: HasManyAddAssociationsMixin<InvestmentMaster, number>;
  declare setInvestments: HasManySetAssociationsMixin<InvestmentMaster, number>;
  declare removeInvestment: HasManyRemoveAssociationMixin<
    InvestmentMaster,
    number
  >;
  declare removeInvestments: HasManyRemoveAssociationsMixin<
    InvestmentMaster,
    number
  >;
  declare hasInvestment: HasManyHasAssociationMixin<InvestmentMaster, number>;
  declare hasInvestments: HasManyHasAssociationsMixin<InvestmentMaster, number>;
  declare countInvestments: HasManyCountAssociationsMixin;
  declare createInvestment: HasManyCreateAssociationMixin<
    InvestmentMaster,
    'category_id'
  >;

  declare investments?: NonAttribute<InvestmentMaster[]>;

  declare static associations: {
    investments: Association<InvestmentCategoryMaster, InvestmentMaster>;
  };
}

/**
 * Initializes Investment Category Master Table in the Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initInvestmentCategoryMaster(sequelize: Sequelize) {
  InvestmentCategoryMaster.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      category: { allowNull: false, type: DataTypes.STRING },
      category_short: { allowNull: false, type: DataTypes.STRING },
      risk_rank: { allowNull: false, type: DataTypes.INTEGER },
      risk_name: { allowNull: false, type: DataTypes.STRING },
      tax_term_threshold_years: { allowNull: false, type: DataTypes.INTEGER },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'MasterInvestmentCategories',
    },
  );
}
