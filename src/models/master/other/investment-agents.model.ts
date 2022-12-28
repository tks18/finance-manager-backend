import { Model, DataTypes } from 'sequelize';
import { Investments } from '@models';
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
 * @class Investment Agents Master Table
 */
export class InvestmentAgentMaster extends Model<
  InferAttributes<
    InvestmentAgentMaster,
    {
      omit: 'investments';
    }
  >,
  InferCreationAttributes<
    InvestmentAgentMaster,
    {
      omit: 'investments';
    }
  >
> {
  declare _id: CreationOptional<number>;
  declare name: string;
  declare company_name: string;
  declare client_code: string;
  declare dp_id: string;
  declare bo_id: string;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare getInvestments: HasManyGetAssociationsMixin<Investments>;
  declare addInvestment: HasManyAddAssociationMixin<Investments, number>;
  declare addInvestments: HasManyAddAssociationsMixin<Investments, number>;
  declare setInvestments: HasManySetAssociationsMixin<Investments, number>;
  declare removeInvestment: HasManyRemoveAssociationMixin<Investments, number>;
  declare removeInvestments: HasManyRemoveAssociationsMixin<
    Investments,
    number
  >;
  declare hasInvestment: HasManyHasAssociationMixin<Investments, number>;
  declare hasInvestments: HasManyHasAssociationsMixin<Investments, number>;
  declare countInvestments: HasManyCountAssociationsMixin;
  declare createInvestment: HasManyCreateAssociationMixin<
    Investments,
    'agent_id'
  >;

  declare investments?: NonAttribute<Investments[]>;

  declare static associations: {
    investments: Association<InvestmentAgentMaster, Investments>;
  };
}

/**
 * Initializes Investment Agent Master Table in Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initInvestmentAgentMaster(sequelize: Sequelize): void {
  InvestmentAgentMaster.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: { allowNull: false, type: DataTypes.STRING },
      company_name: { allowNull: false, type: DataTypes.STRING },
      client_code: { allowNull: false, type: DataTypes.STRING },
      dp_id: { allowNull: false, type: DataTypes.STRING },
      bo_id: { allowNull: false, type: DataTypes.STRING },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, timestamps: true, tableName: 'MasterInvestmentAgents' },
  );
}
