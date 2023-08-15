import { DateTime } from 'luxon';
import { Model, DataTypes } from 'sequelize';
import {
  CalendarMaster,
  IncomeMaster,
  IncomeSourceMaster,
  BankMaster,
  InvestmentMaster,
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
 * @class Income Transactions Table
 */
export class Incomes extends Model<
  InferAttributes<Incomes>,
  InferCreationAttributes<Incomes>
> {
  declare _id: CreationOptional<number>;
  declare date_id: ForeignKey<CalendarMaster['_id']>;
  declare date: string | DateTime;
  declare master_id: ForeignKey<IncomeMaster['_id']>;
  declare source_id: ForeignKey<IncomeSourceMaster['_id']>;
  declare bank_id: ForeignKey<BankMaster['_id']>;
  declare investment_id: ForeignKey<InvestmentMaster['_id']>;
  declare amount: number;
  declare remarks: string;
  declare taxable_amount: number;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare calendarRecord?: NonAttribute<CalendarMaster>;
  declare masterRecord?: NonAttribute<IncomeMaster>;
  declare sourceRecord?: NonAttribute<IncomeSourceMaster>;
  declare bankRecord?: NonAttribute<BankMaster>;
  declare investmentRecord?: NonAttribute<InvestmentMaster>;
}

/**
 * Defines the Relationships for the Model
 */
function defineRelationships(): void {
  CalendarMaster.hasMany(Incomes, {
    sourceKey: '_id',
    foreignKey: 'date_id',
    as: 'incomes',
  });
  IncomeMaster.hasMany(Incomes, {
    sourceKey: '_id',
    foreignKey: 'master_id',
    as: 'transactions',
  });
  IncomeSourceMaster.hasMany(Incomes, {
    sourceKey: '_id',
    foreignKey: 'source_id',
    as: 'transactions',
  });
  BankMaster.hasMany(Incomes, {
    sourceKey: '_id',
    foreignKey: 'bank_id',
    as: 'incomes',
  });
  InvestmentMaster.hasMany(Incomes, {
    sourceKey: '_id',
    foreignKey: 'investment_id',
    as: 'incomes',
  });
  Incomes.belongsTo(CalendarMaster, {
    targetKey: '_id',
    foreignKey: 'date_id',
    as: 'calendarRecord',
  });
  Incomes.belongsTo(IncomeMaster, {
    targetKey: '_id',
    foreignKey: 'master_id',
    as: 'masterRecord',
  });
  Incomes.belongsTo(IncomeSourceMaster, {
    targetKey: '_id',
    foreignKey: 'source_id',
    as: 'sourceRecord',
  });
  Incomes.belongsTo(BankMaster, {
    targetKey: '_id',
    foreignKey: 'bank_id',
    as: 'bankRecord',
  });
  Incomes.belongsTo(InvestmentMaster, {
    targetKey: '_id',
    foreignKey: 'investment_id',
    as: 'investmentRecord',
  });
}

/**
 * Initializes Income Transactions Table in Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initIncomes(sequelize: Sequelize): void {
  Incomes.init(
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
          model: IncomeMaster,
          key: '_id',
        },
      },
      source_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: IncomeSourceMaster,
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
      investment_id: {
        type: DataTypes.INTEGER,
        references: {
          model: InvestmentMaster,
          key: '_id',
        },
      },
      remarks: { allowNull: false, type: DataTypes.STRING },
      amount: { allowNull: false, type: DataTypes.DECIMAL },
      taxable_amount: { allowNull: false, type: DataTypes.DECIMAL },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'TransactionIncomes',
    },
  );

  defineRelationships();
}
