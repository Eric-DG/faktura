// apps/backend/src/db.js (adjust path to your project)
import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

export async function connectDB() {
  await sequelize.authenticate();
}

