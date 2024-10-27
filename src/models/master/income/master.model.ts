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
 * @class Income Master Table
 */
export class IncomeMaster extends Model<
  InferAttributes<IncomeMaster, { omit: 'transactions' }>,
  InferCreationAttributes<IncomeMaster, { omit: 'transactions' }>
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
    transactions: Association<IncomeMaster, Incomes>;
  };
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
      name: { allowNull: false, type: DataTypes.STRING },
      type: { allowNull: false, type: DataTypes.STRING },
      is_pf: { allowNull: false, type: DataTypes.BOOLEAN },
      is_tds: { allowNull: false, type: DataTypes.BOOLEAN },
      is_mediclaim: { allowNull: false, type: DataTypes.BOOLEAN },
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
