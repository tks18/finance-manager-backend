import { DateTime } from 'luxon';
import { Model, DataTypes } from 'sequelize';
import { CalendarMaster, CreditCardMaster, AssetMaster } from '@models';
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
 * @class EMI Master Table
 */
export class EMIMaster extends Model<
  InferAttributes<EMIMaster, { omit: 'assets' }>,
  InferCreationAttributes<EMIMaster, { omit: 'assets' }>
> {
  declare _id: CreationOptional<number>;
  declare credit_card_id: ForeignKey<CreditCardMaster['_id']>;
  declare emi_start_date_id: ForeignKey<CalendarMaster['_id']>;
  declare emi_end_date_id: ForeignKey<CalendarMaster['_id']>;
  declare emi_start_date: string | DateTime;
  declare emi_end_date: string | DateTime;
  declare payable_term: number;
  declare total_installments: number;
  declare total_emi_payment: number;
  declare total_product_cost: number;
  declare interest: number;
  declare total_interest_payable: number;
  declare no_cost_emi_discount: number;
  declare emi_amount: number;
  declare processing_cost: number;
  declare processing_gst_component: number;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare getAssets: HasManyGetAssociationsMixin<AssetMaster>;
  declare addAsset: HasManyAddAssociationMixin<AssetMaster, number>;
  declare addAssets: HasManyAddAssociationsMixin<AssetMaster, number>;
  declare setAssets: HasManySetAssociationsMixin<AssetMaster, number>;
  declare removeAsset: HasManyRemoveAssociationMixin<AssetMaster, number>;
  declare removeAssets: HasManyRemoveAssociationsMixin<AssetMaster, number>;
  declare hasAsset: HasManyHasAssociationMixin<AssetMaster, number>;
  declare hasAssets: HasManyHasAssociationsMixin<AssetMaster, number>;
  declare countAssets: HasManyCountAssociationsMixin;
  declare createAsset: HasManyCreateAssociationMixin<AssetMaster, 'emi_id'>;

  declare assets?: NonAttribute<AssetMaster[]>;

  declare creditCard?: NonAttribute<CreditCardMaster>;
  declare startCalendarDateRecord?: NonAttribute<CalendarMaster>;
  declare endCalendarDateRecord?: NonAttribute<CalendarMaster>;

  declare static associations: {
    assets: Association<EMIMaster, AssetMaster>;
  };
}

/**
 * Defines the Relationships for the Model
 */
function defineRelationships(): void {
  CalendarMaster.hasMany(EMIMaster, {
    sourceKey: '_id',
    foreignKey: 'emi_start_date_id',
    as: 'EMIStartRecords',
  });
  CalendarMaster.hasMany(EMIMaster, {
    sourceKey: '_id',
    foreignKey: 'emi_end_date_id',
    as: 'EMIEndRecords',
  });
  CreditCardMaster.hasMany(EMIMaster, {
    sourceKey: '_id',
    foreignKey: 'credit_card_id',
    as: 'emiRecords',
  });
  EMIMaster.belongsTo(CalendarMaster, {
    targetKey: '_id',
    foreignKey: 'emi_start_date_id',
    as: 'startCalendarDateRecord',
  });
  EMIMaster.belongsTo(CalendarMaster, {
    targetKey: '_id',
    foreignKey: 'emi_end_date_id',
    as: 'endCalendarDateRecord',
  });
  EMIMaster.belongsTo(CreditCardMaster, {
    targetKey: '_id',
    foreignKey: 'credit_card_id',
    as: 'creditCard',
  });
}

/**
 * Initializes EMI Master Table in Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initEMIMaster(sequelize: Sequelize): void {
  EMIMaster.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      credit_card_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: CreditCardMaster,
          key: '_id',
        },
      },
      emi_start_date_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: CalendarMaster,
          key: '_id',
        },
      },
      emi_end_date_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: CalendarMaster,
          key: '_id',
        },
      },
      emi_start_date: {
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('emi_start_date'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue('emi_start_date', value.toFormat('yyyy-LL-dd'));
        },
      },
      emi_end_date: {
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('emi_end_date'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue('emi_end_date', value.toFormat('yyyy-LL-dd'));
        },
      },
      payable_term: DataTypes.DECIMAL,
      total_installments: DataTypes.INTEGER,
      total_emi_payment: DataTypes.DECIMAL,
      total_product_cost: DataTypes.DECIMAL,
      interest: DataTypes.DECIMAL,
      total_interest_payable: DataTypes.DECIMAL,
      no_cost_emi_discount: DataTypes.DECIMAL,
      emi_amount: DataTypes.DECIMAL,
      processing_cost: DataTypes.DECIMAL,
      processing_gst_component: DataTypes.DECIMAL,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, timestamps: true, tableName: 'MasterEMI' },
  );

  defineRelationships();
}
