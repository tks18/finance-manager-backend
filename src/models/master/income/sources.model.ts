import { Model, DataTypes } from 'sequelize';
import { IncomeCategoryMaster, Incomes } from '@models';
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
 * @class Income Source Master Table
 */
export class IncomeSourceMaster extends Model<
  InferAttributes<IncomeSourceMaster, { omit: 'transactions' }>,
  InferCreationAttributes<IncomeSourceMaster, { omit: 'transactions' }>
> {
  declare _id: CreationOptional<number>;
  declare source_name: string;
  declare source_type: string;
  declare category_id: ForeignKey<IncomeCategoryMaster['_id']>;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare incomeCategory?: NonAttribute<IncomeCategoryMaster>;

  declare getTransactions: HasManyGetAssociationsMixin<Incomes>;
  declare addTransaction: HasManyAddAssociationMixin<Incomes, number>;
  declare addTransactions: HasManyAddAssociationsMixin<Incomes, number>;
  declare setTransactions: HasManySetAssociationsMixin<Incomes, number>;
  declare removeTransaction: HasManyRemoveAssociationMixin<Incomes, number>;
  declare removeTransactions: HasManyRemoveAssociationsMixin<Incomes, number>;
  declare hasTransaction: HasManyHasAssociationMixin<Incomes, number>;
  declare hasTransactions: HasManyHasAssociationsMixin<Incomes, number>;
  declare countTransactions: HasManyCountAssociationsMixin;
  declare createTransaction: HasManyCreateAssociationMixin<
    Incomes,
    'master_id'
  >;

  declare transactions?: NonAttribute<Incomes[]>;

  declare static associations: {
    transactions: Association<IncomeSourceMaster, Incomes>;
  };
}

/**
 * Defines the Relationships for the Model
 */
function defineRelationships(): void {
  IncomeCategoryMaster.hasMany(IncomeSourceMaster, {
    sourceKey: '_id',
    foreignKey: 'category_id',
    as: 'incomeSources',
  });
  IncomeSourceMaster.belongsTo(IncomeCategoryMaster, {
    targetKey: '_id',
    foreignKey: 'category_id',
    as: 'incomeCategory',
  });
}

/**
 * Initializes Income Source Master Table in Database for Syncing
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initIncomeSourceMaster(sequelize: Sequelize): void {
  IncomeSourceMaster.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      source_name: { allowNull: false, type: DataTypes.STRING },
      source_type: { allowNull: false, type: DataTypes.STRING },
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
    { sequelize, timestamps: true, tableName: 'MasterIncomeSources' },
  );

  defineRelationships();
}
