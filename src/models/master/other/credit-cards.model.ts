import { Model, DataTypes, ForeignKey, NonAttribute } from 'sequelize';
import { BankMaster, EMIMaster } from '@models';
import type {
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
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
 * @class Credit Card Master Table
 */
export class CreditCardMaster extends Model<
  InferAttributes<CreditCardMaster, { omit: 'emiRecords' }>,
  InferCreationAttributes<CreditCardMaster, { omit: 'emiRecords' }>
> {
  declare _id: CreationOptional<number>;
  declare card_name: string;
  declare card_type: string;
  declare card_gateway_vendor: string;
  declare bank_id: ForeignKey<BankMaster['_id']>;
  declare card_no: string;
  declare card_expiry_month: number;
  declare card_expiry_year: number;
  declare card_cvv_code: number;
  declare credit_limit: number;
  declare is_international: boolean;
  declare ecom_limit: number;
  declare tap_enabled: boolean;
  declare tap_limit: number;
  declare pos_limit: number;
  declare international_limit: number;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare bankRecord?: NonAttribute<BankMaster>;

  declare getEmiRecords: HasManyGetAssociationsMixin<EMIMaster>;
  declare addEmiRecord: HasManyAddAssociationMixin<EMIMaster, number>;
  declare addEmiRecords: HasManyAddAssociationsMixin<EMIMaster, number>;
  declare setEmiRecords: HasManySetAssociationsMixin<EMIMaster, number>;
  declare removeEmiRecord: HasManyRemoveAssociationMixin<EMIMaster, number>;
  declare removeEmiRecords: HasManyRemoveAssociationsMixin<EMIMaster, number>;
  declare hasEmiRecord: HasManyHasAssociationMixin<EMIMaster, number>;
  declare hasEmiRecords: HasManyHasAssociationsMixin<EMIMaster, number>;
  declare countEmiRecords: HasManyCountAssociationsMixin;
  declare createEmiRecord: HasManyCreateAssociationMixin<
    EMIMaster,
    'credit_card_id'
  >;

  declare emiRecords?: NonAttribute<EMIMaster[]>;

  declare static associations: {
    emiRecords: Association<CreditCardMaster, EMIMaster>;
  };
}

/**
 * Defines the Relationships for the Model
 */
function defineRelationships(): void {
  BankMaster.hasMany(CreditCardMaster, {
    sourceKey: '_id',
    foreignKey: 'bank_id',
    as: 'creditCards',
  });
  CreditCardMaster.belongsTo(BankMaster, {
    targetKey: '_id',
    foreignKey: 'bank_id',
    as: 'bankRecord',
  });
}

/**
 * Initializes Credit Card Master Table in Database for Syncing
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initCreditCardMaster(sequelize: Sequelize): void {
  CreditCardMaster.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      card_name: { allowNull: false, type: DataTypes.STRING },
      card_type: { allowNull: false, type: DataTypes.STRING },
      card_gateway_vendor: { allowNull: false, type: DataTypes.STRING },
      bank_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: BankMaster,
          key: '_id',
        },
      },
      card_no: { allowNull: false, type: DataTypes.STRING },
      card_expiry_month: { allowNull: false, type: DataTypes.INTEGER },
      card_expiry_year: { allowNull: false, type: DataTypes.INTEGER },
      card_cvv_code: { allowNull: false, type: DataTypes.INTEGER },
      credit_limit: { allowNull: false, type: DataTypes.DECIMAL },
      is_international: { allowNull: false, type: DataTypes.BOOLEAN },
      ecom_limit: { allowNull: false, type: DataTypes.DECIMAL },
      tap_enabled: { allowNull: false, type: DataTypes.BOOLEAN },
      tap_limit: { allowNull: false, type: DataTypes.DECIMAL },
      pos_limit: { allowNull: false, type: DataTypes.DECIMAL },
      international_limit: { allowNull: false, type: DataTypes.DECIMAL },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, timestamps: true, tableName: 'MasterCreditCards' },
  );

  defineRelationships();
}
