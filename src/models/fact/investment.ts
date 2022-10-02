import { DateTime } from 'luxon';
import { Model, DataTypes } from 'sequelize';
import { CalendarMaster, BankMaster, InvestmentMaster } from '@models';
import type {
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
  NonAttribute,
} from 'sequelize';

/**
 * @class Investment Transactions Table
 */
export class Investments extends Model<
  InferAttributes<Investments>,
  InferCreationAttributes<Investments>
> {
  declare _id: CreationOptional<number>;
  declare date_id: ForeignKey<CalendarMaster['_id']>;
  declare date: string | DateTime;
  declare master_id: ForeignKey<InvestmentMaster['_id']>;
  declare bank_id: ForeignKey<BankMaster['_id']>;
  declare cost: number;
  declare units: number;
  declare amount: number;
  declare tax_allowable_amount: number;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare calendarRecord?: NonAttribute<CalendarMaster>;
  declare masterRecord?: NonAttribute<InvestmentMaster>;
  declare bankRecord?: NonAttribute<BankMaster>;
}

/**
 * Defines the Relationships for the Model
 */
function defineRelationships(): void {
  CalendarMaster.hasMany(Investments, {
    sourceKey: '_id',
    foreignKey: 'date_id',
    as: 'investments',
  });
  InvestmentMaster.hasMany(Investments, {
    sourceKey: '_id',
    foreignKey: 'master_id',
    as: 'transactions',
  });
  BankMaster.hasMany(Investments, {
    sourceKey: '_id',
    foreignKey: 'bank_id',
    as: 'investments',
  });
  Investments.belongsTo(CalendarMaster, {
    targetKey: '_id',
    foreignKey: 'date_id',
    as: 'calendarRecord',
  });
  Investments.belongsTo(InvestmentMaster, {
    targetKey: '_id',
    foreignKey: 'master_id',
    as: 'masterRecord',
  });
  Investments.belongsTo(BankMaster, {
    targetKey: '_id',
    foreignKey: 'bank_id',
    as: 'bankRecord',
  });
}

/**
 * Initializes Investment Transactions Table in Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initInvestments(sequelize: Sequelize): void {
  Investments.init(
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
          model: InvestmentMaster,
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
      cost: { allowNull: false, type: DataTypes.DECIMAL },
      units: { allowNull: false, type: DataTypes.DECIMAL },
      amount: { allowNull: false, type: DataTypes.DECIMAL },
      tax_allowable_amount: { allowNull: false, type: DataTypes.DECIMAL },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'TransactionInvestments',
    },
  );

  defineRelationships();
}
