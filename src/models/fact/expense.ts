import { DateTime } from 'luxon';
import { Model, DataTypes } from 'sequelize';
import {
  CalendarMaster,
  ExpenseMaster,
  BankMaster,
  AssetMaster,
  EMIMaster,
  InsuranceMaster,
} from '@models';
import type {
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
  NonAttribute,
} from 'sequelize';

/**
 * @class Expense Transactions Table
 */
export class Expenses extends Model<
  InferAttributes<Expenses>,
  InferCreationAttributes<Expenses>
> {
  declare _id: CreationOptional<number>;
  declare date_id: ForeignKey<CalendarMaster['_id']>;
  declare date: string | DateTime;
  declare master_id: ForeignKey<ExpenseMaster['_id']>;
  declare bank_id: ForeignKey<BankMaster['_id']>;
  declare asset_id: ForeignKey<AssetMaster['_id']>;
  declare emi_id: ForeignKey<EMIMaster['_id']>;
  declare insurance_id: ForeignKey<InsuranceMaster['_id']>;
  declare vendor: string;
  declare remarks: string;
  declare amount: number;
  declare tax_allowable_amount: number;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare calendarRecord?: NonAttribute<CalendarMaster>;
  declare masterRecord?: NonAttribute<ExpenseMaster>;
  declare bankRecord?: NonAttribute<BankMaster>;
  declare assetRecord?: NonAttribute<AssetMaster>;
  declare emiRecord?: NonAttribute<EMIMaster>;
  declare insuranceRecord?: NonAttribute<InsuranceMaster>;
}

/**
 * Defines the Relationships for the Model
 */
function defineRelationships(): void {
  CalendarMaster.hasMany(Expenses, {
    sourceKey: '_id',
    foreignKey: 'date_id',
    as: 'expenses',
  });
  ExpenseMaster.hasMany(Expenses, {
    sourceKey: '_id',
    foreignKey: 'master_id',
    as: 'transactions',
  });
  BankMaster.hasMany(Expenses, {
    sourceKey: '_id',
    foreignKey: 'bank_id',
    as: 'expenses',
  });
  AssetMaster.hasMany(Expenses, {
    sourceKey: '_id',
    foreignKey: 'asset_id',
    as: 'transactions',
  });
  EMIMaster.hasMany(Expenses, {
    sourceKey: '_id',
    foreignKey: 'emi_id',
    as: 'transactions',
  });
  InsuranceMaster.hasMany(Expenses, {
    sourceKey: '_id',
    foreignKey: 'insurance_id',
    as: 'transactions',
  });
  Expenses.belongsTo(CalendarMaster, {
    targetKey: '_id',
    foreignKey: 'date_id',
    as: 'calendarRecord',
  });
  Expenses.belongsTo(ExpenseMaster, {
    targetKey: '_id',
    foreignKey: 'master_id',
    as: 'masterRecord',
  });
  Expenses.belongsTo(BankMaster, {
    targetKey: '_id',
    foreignKey: 'bank_id',
    as: 'bankRecord',
  });
  Expenses.belongsTo(AssetMaster, {
    targetKey: '_id',
    foreignKey: 'asset_id',
    as: 'assetRecord',
  });
  Expenses.belongsTo(EMIMaster, {
    targetKey: '_id',
    foreignKey: 'emi_id',
    as: 'emiRecord',
  });
  Expenses.belongsTo(InsuranceMaster, {
    targetKey: '_id',
    foreignKey: 'insurance_id',
    as: 'insuranceRecord',
  });
}

/**
 * Initializes Expense Transactions Table in Database for Syncing
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initExpenses(sequelize: Sequelize): void {
  Expenses.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      date_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: CalendarMaster,
          key: '_id',
        },
      },
      date: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('date'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd').toISODate();
        },
      },
      master_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: ExpenseMaster,
          key: '_id',
        },
      },
      bank_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: BankMaster,
          key: '_id',
        },
      },
      asset_id: {
        type: DataTypes.INTEGER,
        references: {
          model: AssetMaster,
          key: '_id',
        },
      },
      emi_id: {
        type: DataTypes.INTEGER,
        references: {
          model: EMIMaster,
          key: '_id',
        },
      },
      insurance_id: {
        type: DataTypes.INTEGER,
        references: {
          model: InsuranceMaster,
          key: '_id',
        },
      },
      vendor: { allowNull: false, type: DataTypes.STRING },
      remarks: { allowNull: false, type: DataTypes.STRING },
      amount: { allowNull: false, type: DataTypes.DECIMAL },
      tax_allowable_amount: { allowNull: false, type: DataTypes.DECIMAL },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'TransactionExpenses',
    },
  );

  defineRelationships();
}
