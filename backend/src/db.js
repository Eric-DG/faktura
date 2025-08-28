// backend/src/db.js
import { Sequelize } from 'sequelize';
import 'dotenv/config';

const isProd = process.env.RENDER === 'true' || process.env.NODE_ENV === 'production';

const databaseUrl =
  process.env.DATABASE_URL ||
  'postgres://postgres:postgres@127.0.0.1:5432/postgres';

const options = {
  dialect: 'postgres',
  logging: false,
  pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
  dialectOptions: {}
};

if (isProd) {
  options.dialectOptions.ssl = {
    require: true,
    rejectUnauthorized: false
  };
}

export const sequelize = new Sequelize(databaseUrl, options);

export async function connectDB(retries = 5, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      await sequelize.authenticate();
      console.log('✅ Database connected');
      return;
    } catch (err) {
      console.error(`DB connect failed (${i + 1}/${retries}):`, err.message);
      if (i === retries - 1) throw err;
      await new Promise(r => setTimeout(r, delay));
    }
  }
}
