import { DateTime } from 'luxon';
import { Model, DataTypes } from 'sequelize';
import { CalendarMaster, InvestmentMaster } from '@models';
import type {
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
  NonAttribute,
} from 'sequelize';

/**
 * @class Market Data Table
 */
export class MarketData extends Model<
  InferAttributes<MarketData>,
  InferCreationAttributes<MarketData>
> {
  declare _id: CreationOptional<number>;
  declare date_id: ForeignKey<CalendarMaster['_id']>;
  declare date: string | DateTime;
  declare master_id: ForeignKey<InvestmentMaster['_id']>;
  declare open: number;
  declare high: number;
  declare low: number;
  declare close: number;
  declare adj_close: number;
  declare volume: number;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare calendarRecord?: NonAttribute<CalendarMaster>;
  declare masterRecord?: NonAttribute<InvestmentMaster>;
}

/**
 * Defines the Relationships for the Model
 */
function defineRelationships(): void {
  CalendarMaster.hasMany(MarketData, {
    sourceKey: '_id',
    foreignKey: 'date_id',
    as: 'marketRecords',
  });
  InvestmentMaster.hasMany(MarketData, {
    sourceKey: '_id',
    foreignKey: 'master_id',
    as: 'marketRecords',
  });
  MarketData.belongsTo(CalendarMaster, {
    targetKey: '_id',
    foreignKey: 'date_id',
    as: 'calendarRecord',
  });
  MarketData.belongsTo(InvestmentMaster, {
    targetKey: '_id',
    foreignKey: 'master_id',
    as: 'masterRecord',
  });
}

/**
 * Initializes Market Data Table in Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initMarketData(sequelize: Sequelize): void {
  MarketData.init(
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
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue('date', value.toFormat('yyyy-LL-dd'));
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
      open: DataTypes.DECIMAL,
      high: DataTypes.DECIMAL,
      low: DataTypes.DECIMAL,
      close: DataTypes.DECIMAL,
      adj_close: DataTypes.DECIMAL,
      volume: DataTypes.DECIMAL,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'TransactionMarketData',
    },
  );

  defineRelationships();
}
