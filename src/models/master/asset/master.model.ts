import { Model, DataTypes } from 'sequelize';
import { CalendarMaster, AssetCategoryMaster, EMIMaster } from '@models';
import { DateTime } from 'luxon';
import type {
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
  NonAttribute,
} from 'sequelize';

/**
 * @class Asset Master Table
 */
export class AssetMaster extends Model<
  InferAttributes<AssetMaster>,
  InferCreationAttributes<AssetMaster>
> {
  declare _id: CreationOptional<number>;
  declare date_id: ForeignKey<CalendarMaster['_id']>;
  declare date: string | DateTime;
  declare name: string;
  declare emi_id: ForeignKey<EMIMaster>;
  declare amount: number;
  declare category_id: ForeignKey<AssetCategoryMaster['_id']>;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare calendarRecord?: NonAttribute<CalendarMaster>;
  declare emiRecord?: NonAttribute<EMIMaster>;
  declare assetCategory?: NonAttribute<AssetCategoryMaster>;
}

/**
 * Defines the Relationships for the Model
 */
function defineRelationships(): void {
  CalendarMaster.hasMany(AssetMaster, {
    sourceKey: '_id',
    foreignKey: 'date_id',
    as: 'assets',
  });
  EMIMaster.hasMany(AssetMaster, {
    sourceKey: '_id',
    foreignKey: 'emi_id',
    as: 'assets',
  });
  AssetCategoryMaster.hasMany(AssetMaster, {
    sourceKey: '_id',
    foreignKey: 'category_id',
    as: 'assets',
  });
  AssetMaster.belongsTo(CalendarMaster, {
    targetKey: '_id',
    foreignKey: 'date_id',
    as: 'calendarRecord',
  });
  AssetMaster.belongsTo(EMIMaster, {
    targetKey: '_id',
    foreignKey: 'emi_id',
    as: 'emiRecord',
  });
  AssetMaster.belongsTo(AssetCategoryMaster, {
    targetKey: '_id',
    foreignKey: 'category_id',
    as: 'assetCategory',
  });
}

/**
 * Initializes Investment Master Table in Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initAssetMaster(sequelize: Sequelize): void {
  AssetMaster.init(
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
        type: DataTypes.DATEONLY,
        get() {
          const value = String(this.getDataValue('date'));
          return DateTime.fromFormat(value, 'yyyy-LL-dd');
        },
        set(value: DateTime) {
          this.setDataValue('date', value.toFormat('yyyy-LL-dd'));
        },
      },
      name: DataTypes.STRING,
      emi_id: DataTypes.INTEGER,
      amount: DataTypes.DECIMAL,
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: AssetCategoryMaster,
          key: '_id',
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, timestamps: true, tableName: 'MasterAssets' },
  );

  defineRelationships();
}
