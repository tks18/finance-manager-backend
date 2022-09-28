import { DateTime } from 'luxon';
import { Model, DataTypes } from 'sequelize';
import { CalendarMaster } from '@models';
import type {
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
  NonAttribute,
} from 'sequelize';

/**
 * @class Insurance Master Table
 */
export class InsuranceMaster extends Model<
  InferAttributes<InsuranceMaster>,
  InferCreationAttributes<InsuranceMaster>
> {
  declare _id: CreationOptional<number>;
  declare name: string;
  declare type: string;
  declare policy_no: string;
  declare date_id: ForeignKey<CalendarMaster['_id']>;
  declare purchase_date: string | DateTime;
  declare amount_insured: number;
  declare cover_period_years: number;
  declare cover_period_start_date: string | DateTime;
  declare cover_period_end_date: string | DateTime;
  declare ncb_allowance: number;
  declare premium_payable_term_type: string;
  declare premium_payable: number;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare calendarRecord?: NonAttribute<CalendarMaster>;
}

/**
 * Defines the Relationships for the Model
 */
function defineRelationships(): void {
  CalendarMaster.hasMany(InsuranceMaster, {
    sourceKey: '_id',
    foreignKey: 'date_id',
    as: 'insurances',
  });
  InsuranceMaster.belongsTo(CalendarMaster, {
    targetKey: '_id',
    foreignKey: 'date_id',
    as: 'calendarRecord',
  });
}

/**
 * Initializes Insurance Master Table in Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initInsuranceMaster(sequelize: Sequelize): void {
  InsuranceMaster.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      policy_no: DataTypes.STRING,
      date_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: CalendarMaster,
          key: '_id',
        },
      },
      purchase_date: {
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('purchase_date'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue('purchase_date', value.toFormat('yyyy-LL-dd'));
        },
      },
      amount_insured: DataTypes.DECIMAL,
      cover_period_years: DataTypes.DECIMAL,
      cover_period_start_date: {
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('cover_period_start_date'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue(
            'cover_period_start_date',
            value.toFormat('yyyy-LL-dd'),
          );
        },
      },
      cover_period_end_date: {
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('cover_period_end_date'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue(
            'cover_period_end_date',
            value.toFormat('yyyy-LL-dd'),
          );
        },
      },
      ncb_allowance: DataTypes.DECIMAL,
      premium_payable_term_type: DataTypes.STRING,
      premium_payable: DataTypes.DECIMAL,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, timestamps: true, tableName: 'MasterInsurances' },
  );

  defineRelationships();
}
