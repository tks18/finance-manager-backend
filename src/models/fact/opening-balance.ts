import { DateTime } from 'luxon';
import { Model, DataTypes } from 'sequelize';
import { CalendarMaster, BankMaster } from '@models';
import type {
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
  NonAttribute,
} from 'sequelize';

/**
 * @class Opening Balance Transactions Table
 */
export class OpeningBalances extends Model<
  InferAttributes<OpeningBalances>,
  InferCreationAttributes<OpeningBalances>
> {
  declare _id: CreationOptional<number>;
  declare date_id: ForeignKey<CalendarMaster['_id']>;
  declare date: string | DateTime;
  declare bank_id: ForeignKey<BankMaster['_id']>;
  declare opening_balance: number;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare calendarRecord?: NonAttribute<CalendarMaster>;
  declare bankRecord?: NonAttribute<BankMaster>;
}

/**
 * Defines the Relationships for the Model
 */
function defineRelationships(): void {
  CalendarMaster.hasMany(OpeningBalances, {
    sourceKey: '_id',
    foreignKey: 'date_id',
    as: 'openingBalances',
  });
  BankMaster.hasMany(OpeningBalances, {
    sourceKey: '_id',
    foreignKey: 'bank_id',
    as: 'openingBalances',
  });
  OpeningBalances.belongsTo(CalendarMaster, {
    targetKey: '_id',
    foreignKey: 'date_id',
    as: 'calendarRecord',
  });
  OpeningBalances.belongsTo(BankMaster, {
    targetKey: '_id',
    foreignKey: 'bank_id',
    as: 'bankRecord',
  });
}

/**
 * Initializes Opening Balance Transactions Table in Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initOpeningBalances(sequelize: Sequelize): void {
  OpeningBalances.init(
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
      bank_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: BankMaster,
          key: '_id',
        },
      },
      opening_balance: { allowNull: false, type: DataTypes.DECIMAL },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'TransactionOpeningBalances',
    },
  );

  defineRelationships();
}
