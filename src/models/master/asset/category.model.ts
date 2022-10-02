import { Model, DataTypes } from 'sequelize';
import { AssetMaster } from './master.model';
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
 * @class Asset Category Master Table
 */
export class AssetCategoryMaster extends Model<
  InferAttributes<AssetCategoryMaster, { omit: 'assets' }>,
  InferCreationAttributes<AssetCategoryMaster, { omit: 'assets' }>
> {
  declare _id: CreationOptional<number>;
  declare category: string;

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
  declare createAsset: HasManyCreateAssociationMixin<
    AssetMaster,
    'category_id'
  >;

  declare assets?: NonAttribute<AssetMaster[]>;

  declare static associations: {
    assets: Association<AssetCategoryMaster, AssetMaster>;
  };
}

/**
 * Initializes Asset Category Master Table in the Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initAssetCategoryMaster(sequelize: Sequelize) {
  AssetCategoryMaster.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      category: { allowNull: false, type: DataTypes.STRING },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'MasterAssetCategories',
    },
  );
}
