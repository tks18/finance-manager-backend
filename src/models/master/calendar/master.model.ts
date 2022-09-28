import { Model, DataTypes } from 'sequelize';
import { AssetMaster, EMIMaster, InsuranceMaster } from '@models';
import { DateTime } from 'luxon';
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
 * @class Calendar Master Table
 */
export class CalendarMaster extends Model<
  InferAttributes<CalendarMaster>,
  InferCreationAttributes<CalendarMaster>
> {
  declare _id: CreationOptional<number>;
  declare date: string | DateTime;
  declare day_id: number;
  declare day_name: string;
  declare day_name_short: string;
  declare day_type: string;
  declare week_id: number;
  declare start_of_week: string | DateTime;
  declare end_of_week: string | DateTime;
  declare week_name: string;
  declare month_id: number;
  declare fy_month_id: number;
  declare start_of_month: string | DateTime;
  declare day_of_month: number;
  declare end_of_month: string | DateTime;
  declare month_name: string;
  declare month_name_short: string;
  declare quarter_id: number;
  declare fy_quarter_id: number;
  declare start_of_quarter: string | DateTime;
  declare day_of_quarter: number;
  declare end_of_quarter: string | DateTime;
  declare quarter_name: string;
  declare fy_quarter_name: string;
  declare year_id: number;
  declare start_of_year: string | DateTime;
  declare day_of_year: number;
  declare end_of_year: string | DateTime;
  declare financial_year: string;
  declare assesment_year: string;

  // Assets
  declare getAssets: HasManyGetAssociationsMixin<AssetMaster>;
  declare addAsset: HasManyAddAssociationMixin<AssetMaster, number>;
  declare addAssets: HasManyAddAssociationsMixin<AssetMaster, number>;
  declare setAssets: HasManySetAssociationsMixin<AssetMaster, number>;
  declare removeAsset: HasManyRemoveAssociationMixin<AssetMaster, number>;
  declare removeAssets: HasManyRemoveAssociationsMixin<AssetMaster, number>;
  declare hasAsset: HasManyHasAssociationMixin<AssetMaster, number>;
  declare hasAssets: HasManyHasAssociationsMixin<AssetMaster, number>;
  declare countAssets: HasManyCountAssociationsMixin;
  declare createAsset: HasManyCreateAssociationMixin<AssetMaster, 'date_id'>;

  declare assets?: NonAttribute<AssetMaster[]>;

  // EMI Start Records
  declare getEMIStartRecords: HasManyGetAssociationsMixin<EMIMaster>;
  declare addEMIStartRecord: HasManyAddAssociationMixin<EMIMaster, number>;
  declare addEMIStartRecords: HasManyAddAssociationsMixin<EMIMaster, number>;
  declare setEMIStartRecords: HasManySetAssociationsMixin<EMIMaster, number>;
  declare removeEMIStartRecord: HasManyRemoveAssociationMixin<
    EMIMaster,
    number
  >;
  declare removeEMIStartRecords: HasManyRemoveAssociationsMixin<
    EMIMaster,
    number
  >;
  declare hasEMIStartRecord: HasManyHasAssociationMixin<EMIMaster, number>;
  declare hasEMIStartRecords: HasManyHasAssociationsMixin<EMIMaster, number>;
  declare countEMIStartRecords: HasManyCountAssociationsMixin;
  declare createEMIStartRecord: HasManyCreateAssociationMixin<
    EMIMaster,
    'emi_start_date_id'
  >;

  declare EMIStartRecords?: NonAttribute<EMIMaster[]>;

  // EMI End Records
  declare getEMIEndRecords: HasManyGetAssociationsMixin<EMIMaster>;
  declare addEMIEndRecord: HasManyAddAssociationMixin<EMIMaster, number>;
  declare addEMIEndRecords: HasManyAddAssociationsMixin<EMIMaster, number>;
  declare setEMIEndRecords: HasManySetAssociationsMixin<EMIMaster, number>;
  declare removeEMIEndRecord: HasManyRemoveAssociationMixin<EMIMaster, number>;
  declare removeEMIEndRecords: HasManyRemoveAssociationsMixin<
    EMIMaster,
    number
  >;
  declare hasEMIEndRecord: HasManyHasAssociationMixin<EMIMaster, number>;
  declare hasEMIEndRecords: HasManyHasAssociationsMixin<EMIMaster, number>;
  declare countEMIEndRecords: HasManyCountAssociationsMixin;
  declare createEMIEndRecord: HasManyCreateAssociationMixin<
    EMIMaster,
    'emi_end_date_id'
  >;

  declare EMIEndRecords?: NonAttribute<EMIMaster[]>;

  // Insurances
  declare getInsurances: HasManyGetAssociationsMixin<InsuranceMaster>;
  declare addInsurance: HasManyAddAssociationMixin<InsuranceMaster, number>;
  declare addInsurances: HasManyAddAssociationsMixin<InsuranceMaster, number>;
  declare setInsurances: HasManySetAssociationsMixin<InsuranceMaster, number>;
  declare removeInsurance: HasManyRemoveAssociationMixin<
    InsuranceMaster,
    number
  >;
  declare removeInsurances: HasManyRemoveAssociationsMixin<
    InsuranceMaster,
    number
  >;
  declare hasInsurance: HasManyHasAssociationMixin<InsuranceMaster, number>;
  declare hasInsurances: HasManyHasAssociationsMixin<InsuranceMaster, number>;
  declare countInsurances: HasManyCountAssociationsMixin;
  declare createInsurance: HasManyCreateAssociationMixin<
    InsuranceMaster,
    'date_id'
  >;

  declare insurances?: NonAttribute<InsuranceMaster[]>;

  declare static associations: {
    assets: Association<CalendarMaster, AssetMaster>;
    EMIStartRecords: Association<CalendarMaster, EMIMaster>;
    EMIEndRecords: Association<CalendarMaster, EMIMaster>;
    insurances: Association<CalendarMaster, InsuranceMaster>;
  };
}

/**
 * Initializes the Calendar Master Table in the Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initCalendarMaster(sequelize: Sequelize) {
  CalendarMaster.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      date: {
        allowNull: false,
        unique: true,
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('date'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue('date', value.toFormat('yyyy-LL-dd'));
        },
      },
      day_id: DataTypes.INTEGER,
      day_name: DataTypes.STRING,
      day_name_short: DataTypes.STRING,
      day_type: DataTypes.STRING,
      week_id: DataTypes.INTEGER,
      start_of_week: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('start_of_week'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue('start_of_week', value.toFormat('yyyy-LL-dd'));
        },
      },
      end_of_week: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('end_of_week'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue('end_of_week', value.toFormat('yyyy-LL-dd'));
        },
      },
      week_name: DataTypes.STRING,
      month_id: DataTypes.INTEGER,
      fy_month_id: DataTypes.INTEGER,
      start_of_month: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('start_of_month'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue('start_of_month', value.toFormat('yyyy-LL-dd'));
        },
      },
      day_of_month: DataTypes.INTEGER,
      end_of_month: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('end_of_month'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue('end_of_month', value.toFormat('yyyy-LL-dd'));
        },
      },
      month_name: DataTypes.STRING,
      month_name_short: DataTypes.STRING,
      quarter_id: DataTypes.INTEGER,
      fy_quarter_id: DataTypes.INTEGER,
      start_of_quarter: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('start_of_quarter'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue('start_of_quarter', value.toFormat('yyyy-LL-dd'));
        },
      },
      day_of_quarter: DataTypes.INTEGER,
      end_of_quarter: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('end_of_quarter'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue('end_of_quarter', value.toFormat('yyyy-LL-dd'));
        },
      },
      quarter_name: DataTypes.STRING,
      fy_quarter_name: DataTypes.STRING,
      year_id: DataTypes.INTEGER,
      start_of_year: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('start_of_year'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue('start_of_year', value.toFormat('yyyy-LL-dd'));
        },
      },
      day_of_year: DataTypes.INTEGER,
      end_of_year: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('end_of_year'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue('end_of_year', value.toFormat('yyyy-LL-dd'));
        },
      },
      financial_year: DataTypes.STRING,
      assesment_year: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: false,
      tableName: 'MasterCalendar',
    },
  );
}
