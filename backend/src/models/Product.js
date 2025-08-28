import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db.js';

export class Product extends Model {}
Product.init({
  article_no: { type: DataTypes.STRING(20), unique: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
  in_price: { type: DataTypes.INTEGER },
  price: { type: DataTypes.INTEGER, allowNull: false },
  unit: { type: DataTypes.STRING(50) },
  in_stock: { type: DataTypes.INTEGER },
  description: { type: DataTypes.STRING(255) },
}, { sequelize, modelName: 'products', timestamps: true });
