import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db.js';

export class Terms extends Model {}
Terms.init({
  lang: { type: DataTypes.STRING(2), allowNull: false, unique: true },
  title: { type: DataTypes.TEXT, allowNull: false },
  body:  { type: DataTypes.TEXT, allowNull: false },
}, { sequelize, modelName: 'terms', timestamps: true, updatedAt: 'updated_at', createdAt: false });
